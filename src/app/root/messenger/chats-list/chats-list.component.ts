import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ChatService } from 'src/app/core/services/chat/chat.service';
import { WebSocketService } from 'src/app/core/services/web-socket/web-socket.service';
import { Chat } from 'src/app/types/models/chat.model';
import jwt_decode from "jwt-decode";
import { User } from 'src/app/types/interfaces/user';
import {Router} from "@angular/router";

@Component({
    selector: 'app-chats-list',
    templateUrl: './chats-list.component.html',
    styleUrls: ['./chats-list.component.scss']
})
export class ChatsListComponent implements OnInit, OnDestroy {

    private unsubscribe$ = new Subject();

    pinnedChats: Chat[] = [];
    unpinnedChats: Chat[] = [];

    availableChats!: number;

    user!: User;
    chats: any;
    isChatListLoading = false;

    constructor(private chatService: ChatService, private webSocketService: WebSocketService, private router: Router) { }

    ngOnInit(): void {
        // this.chatService.updateChatsList();
        // this.chatService.chats$.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
        //     this.pinnedChats = data.filter((chat) => chat.isPinned);
        //     this.unpinnedChats = data.filter((chat) => !chat.isPinned);
        // })




        this.user = jwt_decode(localStorage.getItem('authToken') || '');
        console.log(this.user);

        this.webSocketService.emit('listChatsByUser', {
            userId: this.user.id
        })
        this.isChatListLoading = true
        this.webSocketService.listen('listChatsByUser').subscribe((data) => {
            this.isChatListLoading = false;
            data = data.map((chat: any) => {
                chat.id = chat._id
                delete chat._id
                return chat
            })
            console.log(data)
            this.pinnedChats = data.filter((chat: any) => chat.isPinned);
            this.unpinnedChats = data.filter((chat: any) => !chat.isPinned);
            this.availableChats = data.length;
        })



    }

    ngOnDestroy(): void {
        this.unsubscribe$.next(0);
        this.unsubscribe$.complete();
    }

    createNewGroupChat(): void {
        this.router.navigate([
            '/root/main/messenger',
            {
                outlets: {
                    modalOutlet: [
                        'modal',
                        'create-chat',
                    ]
                    },
                },
            ]);

    }

}
