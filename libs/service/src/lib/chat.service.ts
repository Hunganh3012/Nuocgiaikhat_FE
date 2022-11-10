import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) {}
}


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor() {}
  
  conversation = new Subject<Message[]>();
  
  messageMap:any= {
    "hi": "Chào, hỏi em khỏe không đi",
    "Hi": "Chào, hỏi em khỏe không đi",
    "khỏe hong":"Khỏe",
    "khỏe không":"Khỏe",
    "Khỏe hong":"Khỏe",
    "Khỏe không":"Khỏe",
    "oki":"bye",
    "oke":"bye",
    
    "default": "Bái bai . Bửa sau nch típ"
  }

  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);  
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1000);
  }

  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }
}