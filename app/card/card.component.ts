import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/ICard';
import { GlobalService } from '../services/global-service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() curentCard: Card;
  
  constructor(private globalService: GlobalService) { }
  @Output() isChange = new EventEmitter();

  ngOnInit() {
  }

  fliepped() {

 this.isChange.emit(this.curentCard)
    //בלחיצה מראים 
    // this.curentCard.flieppedStsatus = true;

    // //counter++
    // this.globalService.counter = this.globalService.counter + 1;

    // if (this.globalService.counter == 1) {
    //   this.globalService.preCard = Object.assign(this.curentCard);
    // this.event.emit(this.curentCard)
    // }
    // else if (this.globalService.counter == 2) {
    //   this.globalService.secondClick();
    // }
    // else {
    //   setTimeout(() => {
    //     this.curentCard.flieppedStsatus = false;
    //     alert("not match.. try agin!");
    //   }, 1000);

    // }
  }

 
  // ismMatch() {

  //    this.globalService.postCard = this.curentCard;

  //   //check match 
  //   if (this.globalService.postCard.id == this.globalService.preCard.id)
  //     return true;
  //   else
  //     return false;

  // }
  // secondClick() {
  //   //מאפסים ספירה
  //   this.globalService.counter = 0;

  //   if (!this.ismMatch()) {
  //     this.notMatch();
  //     return;
  //   }
  //   //אם מתאים -> success
  //   this.event.emit(this.curentCard.flieppedStsatus)
  //   setTimeout(() => {
  //     alert("success");
  //   }, 1000);

  // }

  // notMatch() {
  //   //מכסה כרטיס 
  //   //todo: להפןך גם כרטיס שני
  //   setTimeout(() => {
  //     this.curentCard.flieppedStsatus = false;
  //     this.curentCard=this.globalService.preCard;
  //     this.curentCard.flieppedStsatus = false;
  //     alert("not match.. try agin!");
  //   }, 1000);
  // }
}
//what we want to do?:)
//1.כל הקלפים מכוסים fliepped=false
//2.liepped=true והקלף מוצג  fבעת ליחיצה 
//3.//בלחיצה ראשונה
//PRE = CURRENT
//TEMP = CURRENT

//בחירה שניה
// TEMP = CURRENT
// POST = TEMP

//4. אם הכרטיסים שווים
//להשאיר פתוחים = liepped=true

//5.להוסיף נקודות לשחקנים