import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerComponent } from './messenger.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { ChatsListComponent } from './chats-list/chats-list.component';
import { ChatComponent } from './chat/chat.component';
import { MessengerRoutingModule } from './messenger-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { ChatPlaceholderComponent } from './chat-placeholder/chat-placeholder.component'
import { TranslateModule } from '@ngx-translate/core';
import { SettingsComponent } from './settings/settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    MessengerComponent,
    LeftPanelComponent,
    ChatsListComponent,
    ChatComponent,
    ChatPlaceholderComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    MessengerRoutingModule,
    MatButtonModule,
    MatChipsModule,
    TranslateModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
  ]
})
export class MessengerModule { }
