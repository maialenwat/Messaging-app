import { Message } from './../models/message';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages: Message[] = [
    {
      id: 0,
      from: 'lolo',
      to: 'maia',
      subject: 'Nickname',
      body: 'delta',
      read: true
    },
    {
      id: 1,
      from: 'Mario',
      to: 'Peach',
      subject: 'Tired',
      body: 'Can you stop being kidnapped ?',
      read: true
    },
    {
      id: 2,
      from: 'Darth Vador',
      to: 'Son',
      subject: 'Fatherhood',
      body: 'I am your father',
      read: false
    },
    {
      id: 3,
      from: 'Zelda',
      to: 'Link',
      subject: 'Mission',
      body: 'Save Hyrule one more time !',
      read: false
    }
  ]
  constructor() { }

  /**
   *
   * @returns la liste de tous les messages
   */
  getAll(): Message[]{
    return this.messages;
  }

  /**
   *
   * @param id d'un message
   * @returns un message par son id
   */
  getById(id: number): Message | undefined{
    return this.messages.find(m => m.id = id);
  }

  /**
   * Ajoute un nouveau message à la liste des messages
   */
  create(message: Message): void{
    this.messages.push(message);
  }
}
