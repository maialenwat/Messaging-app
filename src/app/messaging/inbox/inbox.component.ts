import { BehaviorSubject, Subscription } from 'rxjs';
import { MessageService } from './../services/message.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit, OnDestroy {

  @Input() messages!: Message[]
  @Input() count: number = 0

  evt!: Subscription
  constructor(private messageService: MessageService) { }

  ngOnDestroy(): void {
    this.evt.unsubscribe()
  }

  ngOnInit(): void {
    this.evt = this.messageService.subject
    .subscribe(messages => this.messages = messages)

    this.messageService.reload()
  }

  //Méthodes

  /**
   *
   * @param event
   * @returns les messages lus
   */
  filter(event: Event){
    // "caste" de l'élément afin de pouvoir le manipuler
    let input = event.target as HTMLInputElement;

    // renvoi une liste de message si la condition dans filter() est vérifiée
    this.messages = this.messages.filter(message => message.read === input.checked)

    return console.log(event)
  }

}
