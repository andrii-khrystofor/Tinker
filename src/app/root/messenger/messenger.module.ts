import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerComponent } from './messenger.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { ChatsListComponent } from './chats-list/chats-list.component';
import { ChatComponent } from './chat/chat.component';
import { MessengerRoutingModule } from './messenger-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips'



@NgModule({
  declarations: [
    MessengerComponent,
    LeftPanelComponent,
    ChatsListComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    MessengerRoutingModule,
    MatButtonModule,
    MatChipsModule,
  ]
})
export class MessengerModule { }
