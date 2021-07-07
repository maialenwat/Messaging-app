import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  @Input() messages!: Message[]
  @Input() count: number = 0

  constructor() { }

  ngOnInit(): void {
    //gestion du nombre de messages
    this.messages = this.messages.splice(0,this.count);

  }

  //Méthodes
  filter(event: Event){
    // "caste" de l'élément afin de pouvoir le manipuler
    let input = event.target as HTMLInputElement;

    // renvoi une liste de message si la condition dans filter() est vérifiée
    this.messages = this.messages.filter(message => message.read === input.checked)

    return
    console.log(event)
  }

}
