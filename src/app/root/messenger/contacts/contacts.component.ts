import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebSocketService } from 'src/app/core/services/web-socket/web-socket.service';
import jwt_decode from "jwt-decode";
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {

    @HostListener('document:keydown.escape', ['$event'])
    listenToEscPress(): void {
        this.closeContacts();
    }

    isFetchingContacts = false;
    user: any;
    contacts: any;

    subscription = new Subscription()

    constructor(private webSocketService: WebSocketService, private router: Router) { }
    ngOnInit(): void {
        this.user = jwt_decode(localStorage.getItem('authToken') || '');
        this.getContacts();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    searchKey = '';

    search(contacts: any): any {
        console.log('contacts')
        return contacts
    }

    getContacts(): void {
        this.isFetchingContacts = true;

        this.webSocketService.emit('getContacts', {
            user: this.user.id
        });
        this.subscription.add(this.webSocketService.listen('getContacts').subscribe((data: any) => {
            this.isFetchingContacts = false;
            console.log(data);
            this.contacts = data;
        }));
    }

    addContact(): void {
        if (this.searchKey) {
            this.webSocketService.emit('addContact', {
                firstUser: this.user.id,
                secondUser: this.searchKey
            })
        }
    }

    addChat(user: any): void {
        this.webSocketService.emit('createDialog', {
            firstUser: this.user,
            secondUser: user
        })

        this.subscription.add(this.webSocketService.listen('createDialog').subscribe((data) => {
            console.log(data);
            this.router.navigateByUrl(`/root/main/messenger/chat/${data.chatId}`);
        }))
    }

    closeContacts(): void {
        this.router.navigate([
            '/root/main/messenger',
            { outlets: { modalOutlet: null } },
        ]);
    }
}
