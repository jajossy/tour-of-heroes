import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string[] = [];

  constructor() { }

  add(messages: string){
    this.message.push(messages);
  }

  clear() {
    this.message = [];
  }
}
