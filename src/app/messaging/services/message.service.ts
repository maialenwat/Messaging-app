import { Message } from './../models/message';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // private messages: Message[] = [
  //   {
  //     id: 0,
  //     from: 'lolo',
  //     to: 'maia',
  //     subject: 'Nickname',
  //     body: 'delta',
  //     read: true
  //   },
  //   {
  //     id: 1,
  //     from: 'Mario',
  //     to: 'Peach',
  //     subject: 'Tired',
  //     body: 'Can you stop being kidnapped ?',
  //     read: true
  //   },
  //   {
  //     id: 2,
  //     from: 'Darth Vador',
  //     to: 'Son',
  //     subject: 'Fatherhood',
  //     body: 'I am your father',
  //     read: false
  //   },
  //   {
  //     id: 3,
  //     from: 'Zelda',
  //     to: 'Link',
  //     subject: 'Mission',
  //     body: 'Save Hyrule one more time !',
  //     read: false
  //   }
  // ]
  constructor(private http: HttpClient) { }

  /**
   *
   * @returns la liste de tous les messages
   */
  getAll(): Promise<Message[]>{
    return this.http
    .get<Message[]>("http://localhost:4200/assets/datas.json")
    .toPromise();

    // this.http
    //   .get<Message[]>("http://localhost/backend")
    //   .subscribe((ms) => {
    //     this.messages = ms
    //   });

    // this.http
    //   .get<Message[]>("http://localhost/backend")
    //   .toPromise()
    //   .then((ms)=>{
    //     this.messages = ms
    //   });
  }

  /**
   *
   * @param id d'un message
   * @returns un message par son id
   */
  getById(id: number): Message | undefined{
    return {id:0};
  }

  /**
   * Ajoute un nouveau message à la liste des messages
   */
  create(message: Message): void{
    // this.messages.push(message);
  }
}
