// globals.ts
import { Injectable } from '@angular/core';
import { Card } from '../models/ICard';

@Injectable()
export class GlobalService {
  role: string = 'test';
  counter:number=0;
  preCard: Card;
  postCard: Card;
  temp: Card;
  // curentCard:Card;

  ismMatch(curentCard:Card) {

    this.postCard =curentCard;

   //check match 
   if (this.postCard.id == this.preCard.id)
     return true;
   else
     return false;}

  secondClick(curentCard:Card) {
    //מאפסים ספירה
    this.counter = 0;

    if (!this.ismMatch(curentCard)) {
      this.notMatch(curentCard);
      return;
    }
    //אם מתאים -> success
    // this.event.emit(this.curentCard.flieppedStsatus)
    setTimeout(() => {
      alert("success");
    }, 1000);

  }

  notMatch(curentCard:Card) {
    //מכסה כרטיס 
    //todo: להפןך גם כרטיס שני
    setTimeout(() => {
      curentCard.flieppedStsatus = false;
      curentCard=this.preCard;
    curentCard.flieppedStsatus = false;
      alert("not match.. try agin!");
    }, 1000);
  }
}