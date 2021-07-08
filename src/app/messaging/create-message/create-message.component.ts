import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {

  message: Message = {
    to: "",
    subject: "",
    body: ""

  };

  constructor() { }

  ngOnInit(): void {
  }

  // Méthodes
  send(){
    console.log(this.message);
  }

  clear(){
    this.message = {};
  }

}
