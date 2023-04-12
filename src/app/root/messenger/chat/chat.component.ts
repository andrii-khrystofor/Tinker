import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription, take, takeUntil } from 'rxjs';
import { ChatService } from 'src/app/core/services/chat/chat.service';
import { WebSocketService } from 'src/app/core/services/web-socket/web-socket.service';
import { Chat } from 'src/app/types/models/chat.model';
import { Message, MessageDTO } from 'src/app/types/models/message.model';
import jwt_decode from "jwt-decode";
import {ColorsService} from "../services/color.service";

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

    @HostListener('document:keydown.enter', ['$event'])
    listenToEscPress(): void {
        this.sendMessage();
    }


    @ViewChild('chat__messages') private myScrollContainer!: ElementRef;

    scrollToBottom(): void {
        try {
            console.log('scrollToBottom')
            setTimeout(() => this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight, 0);
        } catch (err) { }
    }



    private unsubscribe$ = new Subject();

    private chatId: string = '';
    chat!: Chat | undefined;
    messages!: Message[];

    messageControl = new FormControl('');
    user: any;
    subscription = new Subscription();

    constructor(private router: ActivatedRoute,
        public chatService: ChatService,
        private webSocketService: WebSocketService, private colorService: ColorsService) { }

    ngOnInit(): void {
        this.router.params.pipe(takeUntil(this.unsubscribe$)).subscribe((data: any) => {

            this.chatId = data['id'];
            this.subscription.unsubscribe()
            console.log(this.chatId)
            this.user = jwt_decode(localStorage.getItem('authToken') || '');


            this.webSocketService.emit('getChatInfo', {
                chatId: this.chatId,
                userId: this.user.id
            })

            this.webSocketService.listen('getChatInfo')
                .pipe(take(1))
                .subscribe(data => {
                  this.chat = data

                })

            this.webSocketService.emit('getMessagesByChat', {
                chatId: this.chatId
            })

            this.webSocketService.listen('getMessagesByChat')
                .pipe(take(1))
                .subscribe(data => {
                    const users = new Set(...data.map((message: Message) => message.senderId))

                    console.log('messages', data);
                    this.chatService.messages$.next(data.map(
                        (el: any) => {
                            return {
                                id: el._id,
                                isPinned: el.isPinned,
                                message: el.text,
                                senderId: el.senderId,
                                sentTime: new Date(el.sentTime),

                              color: this.colorService.getGraphColor(el.senderId)
                            }
                        }));
                    this.scrollToBottom();
                })

            this.subscription = this.webSocketService.listen('getMessage')
                .subscribe(data => {
                    const message: Message  & {color: string} = {
                        id: data._id,
                        isPinned: data.isPinned,
                        message: data.text,
                        senderId: data.senderId,
                        sentTime: new Date(data.sentTime),
                      color: this.colorService.getGraphColor(data.senderId)
                    }
                    this.chatService.messages$.next([...this.chatService.messages$.value, message])
                    this.scrollToBottom();
                })


            this.scrollToBottom();

            // this.chat = this.chatService.getChatInfo(this.chatId);
            // this.chatService.getMessagesForChat(this.chatId);
        });
    }



    sendMessage(): void {
        if (this.messageControl.value === '') return;
        const messageToSend = {
            message: this.messageControl.value,
            senderId: this.user.id,
            isPinned: false,
            chatId: this.chatId
        }
        // this.chatService.sendMessage(this.chatId, messageToSend);
        this.webSocketService.emit('sendMessage', messageToSend)
        this.messageControl.setValue('');
    }
    ngOnDestroy(): void {
        this.unsubscribe$.next(0);
        this.unsubscribe$.complete();

        this.subscription.unsubscribe();
    }

}
