import { Injectable } from "@angular/core";
import { User } from "../models/interfaces";

@Injectable({
  providedIn: 'root',
})

export class UserService {

  getUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  setUser(user: User): void {
    const users: User[] = this.getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

}