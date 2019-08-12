import { Component, OnInit } from '@angular/core';
import { Card } from '../models/ICard';
import { GlobalService } from '../services/global-service';

@Component({
  selector: 'card-board',
  templateUrl: './card-board.component.html',
  styleUrls: ['./card-board.component.css']

})
export class CardBoardComponent implements OnInit {
  cards: Card[] = [];
  statusCard: boolean = false;
  numCards: number = 16;
  constructor(private globalService:GlobalService) {
    
    //this.numCards=16;
  }

  ngOnInit() {
    
    this.getCards();
    this.shuffle(this.cards);
  }
  getCards() {

    for (let i = 0; i <= this.numCards; i++) {
      this.cards[i] = this.setCard(i);
      this.cards[i + 1] = this.setCard(i);
      i = i + 1;
    }
  }
  setCard(num: number) {
    let card = new Card();
    card.id = num;
    card.nameCard = `a_${num}`;
    //card.imgUrl=()
    return card;
  }
  isFleip(curentCard:Card,index:number)
  {
    this.cards[index] = curentCard
   curentCard.flieppedStsatus = true;

    //counter++
    this.globalService.counter = this.globalService.counter + 1;

    if (this.globalService.counter == 1) {
      this.globalService.preCard = curentCard;
      // this.event.emit(this.curentCard)
    }
    else if (this.globalService.counter == 2) {
      this.globalService.secondClick(curentCard);
    }
    else {
      setTimeout(() => {
      curentCard.flieppedStsatus = false;
        alert("not match.. try agin!");
      }, 1000);


  }
}
  shuffle(array: Card[]) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex].id;
      array[currentIndex].id = array[randomIndex].id;
      array[randomIndex].id = temporaryValue;
    }
    return array;
  }}

