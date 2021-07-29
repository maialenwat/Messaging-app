import { Message } from './../models/message';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  subject: BehaviorSubject<Message[]>


  constructor(private http: HttpClient, private router: Router) {
    this.subject = new BehaviorSubject([] as Message[]);
  }

  async load(){
    let messages = await this.http.get("").toPromise();
  }

  /**
   *
   * @returns la liste de tous les messages
   */
  getAll(): Promise<Message[]>{
    return this.http
    .get<Message[]>("http://localhost:2400/messages")
    .toPromise();
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
    this.http
      .post('http://localhost:2400/messages', message)
      .toPromise()
      // si la requête s'est bien passée
      .then(datas => {
//  this.reload()
        this.router.navigate(['messages']);

      })
      // dans le cas où ça s'est mal passée
      .catch(reason => {
        console.log(reason)
      })
  }


  /**
   * retourne l'observable de HttpClient
   */
  getObservable(): Observable<Message[]>{
    return this.http
      .get<Message[]>("http://localhost:2400/messages")
  }


  /**
   * récupère la liste de messages dans le backend,
   * met à jour la vue
   */
  reload(): void {
    this.http
    .get<Message[]>("http://localhost:2400/messages")
    .toPromise()
    .then(messages => {
      // next() met à jour la donnée à l'intérieur de l'observable
      this.subject.next(messages)
    })
    .catch(reason => console.log(reason))
  }

}
