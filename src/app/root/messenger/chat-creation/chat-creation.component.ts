import {ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {WebSocketService} from "../../../core/services/web-socket/web-socket.service";
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-chat-creation',
  templateUrl: './chat-creation.component.html',
  styleUrls: ['./chat-creation.component.scss']
})
export class ChatCreationComponent implements OnInit, OnDestroy {


  @HostListener('document:keydown.escape', ['$event'])
  listenToEscPress(): void {
    this.closeModal();
  }

  isFetchingContacts = false;
  user: any;
  contacts: any;
  chatName: string = '';

  selectedUsers: any[] = [];

  subscription = new Subscription()

  constructor(private webSocketService: WebSocketService, private router: Router, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.user = jwt_decode(localStorage.getItem('authToken') || '');
    this.getContacts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  searchKey = '';

  search(contacts: any): any {
    return contacts
  }

  getContacts(): void {
    this.isFetchingContacts = true;

    this.webSocketService.emit('getContacts', {});
    this.subscription.add(this.webSocketService.listen('getContacts').subscribe((data: any) => {
      this.isFetchingContacts = false;
      this.contacts = data;
    }));
  }

  createGroupChat(): void {
    this.webSocketService.emit('createGroupChat', {
      name: this.chatName,

      users: [...this.selectedUsers, this.user].map(user => user._id ? user._id : user.id)
    });
    this.subscription.add(this.webSocketService.listen('createGroupChat').subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl(`/root/main/messenger/chat/${data.chatId}`);
    }))
  }

  addToChat(user: any): void {

    const userIndex = this.selectedUsers.findIndex(u => u._id === user._id)
    if (userIndex !== -1){
      this.selectedUsers.splice(userIndex, 1);
    } else {
      this.selectedUsers.push(user);
    }
    console.log(this.selectedUsers)
    this.cdr.markForCheck();
  }

  closeModal(): void {
    this.router.navigate([
      '/root/main/messenger',
      { outlets: { modalOutlet: null } },
    ]);
  }

  isUserSelected(user: any): boolean{
    const userIndex = this.selectedUsers.findIndex(u => u._id === user._id)
    if (userIndex !== -1){
      return true;
    } else {
      return false;
    }
  }

}
