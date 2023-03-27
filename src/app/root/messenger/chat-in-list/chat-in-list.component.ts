import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from 'src/app/types/models/chat.model';

@Component({
  selector: 'app-chat-in-list',
  templateUrl: './chat-in-list.component.html',
  styleUrls: ['./chat-in-list.component.scss']
})
export class ChatInListComponent implements OnInit {
  

  constructor(private router: Router) {
    
  }
  @Input()
  chat!: Chat;

  ngOnInit(): void {
  }
  goToChat(){
    this.router.navigateByUrl(`/root/main/messenger/chat/${this.chat.id}`);
  }
}
