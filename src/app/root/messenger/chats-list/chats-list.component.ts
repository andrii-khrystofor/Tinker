import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ChatService } from 'src/app/core/services/chat.service';
import { Chat } from 'src/app/types/models/chat.model';

@Component({
  selector: 'app-chats-list',
  templateUrl: './chats-list.component.html',
  styleUrls: ['./chats-list.component.scss']
})
export class ChatsListComponent implements OnInit, OnDestroy {
  
	private unsubscribe$ = new Subject();

  pinnedChats: Chat[] = [];
  unpinnedChats: Chat[] = [];

  unreadMessages = 50;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.updateChatsList();
    this.chatService.chats$.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
      this.pinnedChats = data.filter((chat) => chat.isPinned);
      this.unpinnedChats = data.filter((chat) => !chat.isPinned);
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(0);
    this.unsubscribe$.complete();
  }
  
}
