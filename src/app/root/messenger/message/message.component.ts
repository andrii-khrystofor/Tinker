import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/types/interfaces/user';
import { Message } from 'src/app/types/models/message.model';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input()
  message!: Message;
  user!: User;
  constructor() { }

  ngOnInit(): void {
    this.user = jwt_decode(localStorage.getItem('authToken') || '');
  }

}
