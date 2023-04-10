import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Chat } from 'src/app/types/models/chat.model';
import { Message, MessageDTO } from 'src/app/types/models/message.model';


// const mockChats : Chat[] = [{
//   name: 'Andrew',
//   description: 'Boba',
//   id:0,
//   isPinned: true
// },{
//   name: 'Dmytro',
//   description: 'Boba1',
//   id:1,
//   isPinned: false
// },{
//   name: 'Alina',
//   description: 'Boba2',
//   id:2,
//   isPinned: false
// },{
//   name: 'Misha',
//   description: 'Boba3',
//   id:3,
//   isPinned: false
// },
// {
//   name: 'Vlad',
//   description: 'Boba',
//   id:4,
//   isPinned: true
// },{
//   name: 'Vlad',
//   description: 'Boba1',
//   id:5,
//   isPinned: false
// },{
//   name: 'Nazar',
//   description: 'Boba1',
//   id:6,
//   isPinned: false
// }
// ]

// const messagesMock: Message[] = [
//   {
//     id: 1,
//     isPinned: false,
//     message: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
//     senderId: 0,
//     sentTime: new Date()
//   },{
//     id: 2,
//     isPinned: false,
//     message: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
//     senderId: 1,
//     sentTime: new Date()
//   },{
//     id: 3,
//     isPinned: false,
//     message: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
//     senderId: 0,
//     sentTime: new Date()
//   },{
//     id: 4,
//     isPinned: false,
//     message: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
//     senderId: 1,
//     sentTime: new Date()
//   },{
//     id: 5,
//     isPinned: false,
//     message: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
//     senderId: 0,
//     sentTime: new Date()
//   },{
//     id: 6,
//     isPinned: false,
//     message: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
//     senderId: 1,
//     sentTime: new Date()
//   },
  
// ]
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chats$: BehaviorSubject<Chat[]> = new BehaviorSubject<Chat[]>([]);
  messages$: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  constructor() { }

  // updateChatsList(): void{
  //   this.chats$.next(mockChats);
  // }

  // getChatInfo(chatId: string){
  //   //todo: change logic to get data from BE
  //   return mockChats.find((chat) => chat.id === chatId);
  // }

  // getMessagesForChat(chatId: string): Observable<Message[]> {
    
  //   //todo: change logic to get data from BE
  //   this.messages$.next(messagesMock);
  //   return this.messages$;
  // }

  // sendMessage(chatId: number | string, message: MessageDTO) {
  //   const newId = messagesMock.slice(-1)[0].id;
  //   this.messages$.next([...messagesMock, {...message, id: newId}]);
  // }
}
