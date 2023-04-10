import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket!: io.Socket;

  constructor() {
    // 165.22.85.146:3000
    // this.socket = io.connect('165.22.85.146:3000');

    this.startConnectionForCurrentUser();
  }

  startConnectionForCurrentUser() {
    console.log(this.socket);
    if(this.socket){
      this.socket.close();
      this.socket.disconnect();
    }
    const token = localStorage.getItem('authToken');
    if (token){
      const user = jwt_decode(token);
      this.socket = io.connect('localhost:3000', {
// @ts-ignore
        query: {'userId': user?.id as string}
      });
    }
  }

  listen(eventname: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(eventname, (data: any) => {
        subscriber.next(data);
      })
    })
  }

  emit(eventname: string, data: any) {
    this.socket.emit(eventname, data);
  }
}
