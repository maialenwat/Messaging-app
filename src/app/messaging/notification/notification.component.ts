import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notRead!: Number

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.subject.subscribe(messages => {
      messages = messages.filter(msg => msg.read === false)
      this.notRead = messages.length
      console.log(this.notRead);
    })

  }

}
