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
import { ChatInListComponent } from './chat-in-list/chat-in-list.component';
import { MessageComponent } from './message/message.component'
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ContactsComponent } from './contacts/contacts.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatCreationComponent } from './chat-creation/chat-creation.component';
import {ColorsService} from "./services/color.service";



@NgModule({
  declarations: [
    MessengerComponent,
    LeftPanelComponent,
    ChatsListComponent,
    ChatComponent,
    ChatPlaceholderComponent,
    SettingsComponent,
    ChatInListComponent,
    MessageComponent,
    ContactsComponent,
    ChatCreationComponent,
  ],
  imports: [
    CommonModule,
    MessengerRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatChipsModule,
    TranslateModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    MatProgressSpinnerModule,
    SharedModule,
  ],
  providers: [
    {provide: ColorsService}
  ]
})
export class MessengerModule { }
