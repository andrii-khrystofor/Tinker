import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/types/models/chat.model';

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
  chats: Chat[] = [{
    name: 'Biba',
    description: 'Boba',
    id:0
  },{
    name: 'Biba1',
    description: 'Boba1',
    id:1
  },{
    name: 'Biba2',
    description: 'Boba2',
    id:2
  },{
    name: 'Biba3',
    description: 'Boba3',
    id:3
  },
  {
    name: 'Biba',
    description: 'Boba',
    id:4
  },{
    name: 'Biba1',
    description: 'Boba1',
    id:5
  },{
    name: 'Biba2',
    description: 'Boba2',
    id:6
  },{
    name: 'Biba3',
    description: 'Boba3',
    id:7
  }
  ]
}
