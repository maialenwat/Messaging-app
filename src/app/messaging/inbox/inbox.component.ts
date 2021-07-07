import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  messages: Message[] = [
    {
      id: 2,
      from: 'lolo',
      to: 'maia',
      subject: 'nickname',
      body: 'delta',
      read: false
    },
    {
      id: 18,
      from: 'Mario',
      to: 'Peach',
      subject: 'Tired',
      body: 'Can you stop being kidnapped ?',
      read: false
    },
    {
      id: 4,
      from: 'Darth Vador',
      to: 'Son',
      subject: 'Fatherhood',
      body: 'I am your father',
      read: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
