import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats-list',
  templateUrl: './chats-list.component.html',
  styleUrls: ['./chats-list.component.scss']
})
export class ChatsListComponent implements OnInit {

  unreadMessages = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
