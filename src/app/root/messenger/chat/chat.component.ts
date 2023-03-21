import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  private chatId: number = -1;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.pipe(take(1)).subscribe(data => this.chatId = +data['id']);
  }

}
