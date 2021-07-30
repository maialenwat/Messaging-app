import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {

  message: Message = {};

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  // Méthodes

  /**
   * ajoute un message à la liste des messages au click du bouton "send"
   */
  send(){
    this.messageService.create(this.message);

  }

  /**
   * efface le texte inscrit dans les champs dédiés
   */
  clear(){
    this.message = {};
  }

}
