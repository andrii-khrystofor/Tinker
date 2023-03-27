import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ChatService } from 'src/app/core/services/chat.service';
import { Chat } from 'src/app/types/models/chat.model';
import { Message, MessageDTO } from 'src/app/types/models/message.model';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

    private unsubscribe$ = new Subject();

    private chatId: number = -1;
    chat!: Chat | undefined;
    messages!: Message[];

    messageControl = new FormControl('');

    constructor(private router: ActivatedRoute, public chatService: ChatService) { }

    ngOnInit(): void {
        this.router.params.pipe(takeUntil(this.unsubscribe$)).subscribe((data: any) => {

            this.chatId = +data['id'];
            this.chat = this.chatService.getChatInfo(this.chatId);
            this.chatService.getMessagesForChat(this.chatId);
        });
    }

    sendMessage(): void {
        const messageToSend: MessageDTO = {
            message: this.messageControl.value,
            senderId: 0,
            sentTime: new Date(),
            isPinned: false
        }
        this.chatService.sendMessage(this.chatId, messageToSend);
        this.messageControl.setValue('');
    }
    ngOnDestroy(): void {
        this.unsubscribe$.next(0);
        this.unsubscribe$.complete();
    }
}
