
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/messaging/models/message';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  discord! : Message[]
  constructor() { }

  ngOnInit(): void {
    this.discord = [
      {
        id: 2,
        from: 'lolo',
        to: 'maia',
        subject: 'Nickname',
        body: 'delta',
        read: true
      },
      {
        id: 18,
        from: 'Mario',
        to: 'Peach',
        subject: 'Tired',
        body: 'Can you stop being kidnapped ?',
        read: true
      },
      {
        id: 4,
        from: 'Darth Vador',
        to: 'Son',
        subject: 'Fatherhood',
        body: 'I am your father',
        read: false
      },
      {
        id: 8,
        from: 'Zelda',
        to: 'Link',
        subject: 'Mission',
        body: 'Save Hyrule one more time !',
        read: false
      }
    ]
  }

}
