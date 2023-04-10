import { Injectable } from '@angular/core';
import { User } from 'src/app/types/models/user.model';

const mockUsers: User[] = [
  { id: 0, name: 'Anton' },
  { id: 1, name: 'Andrew' },
  { id: 2, name: 'Dmytro' },
  { id: 3, name: 'Vlad' },
  { id: 4, name: 'Vlad' },
  { id: 5, name: 'Alina' },
  { id: 6, name: 'Misha' },
  { id: 7, name: 'Nazar' },
]
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserInfo(userId: number): User | undefined {
    return mockUsers.find((user) => user.id === userId);
  }
}
