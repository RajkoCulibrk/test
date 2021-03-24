import { Component, Input, OnInit } from '@angular/core';
import { MainserviceService } from '../mainservice.service';
import { CardModel } from '../models/CardModel';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css'],
})
export class SingleCardComponent implements OnInit {
  @Input()
  card: CardModel;
  showFull: boolean = false;
  constructor(private service: MainserviceService) {}

  ngOnInit(): void {}

  setCurrent(id: number) {
    this.service.setCurrentCard(id);
  }

  like() {
    this.card.grade++;
    this.service.likeDislike(this.card).subscribe((x) => {
      console.log(x);
    });
  }

  dislike() {
    this.card.grade--;
    this.service.likeDislike(this.card).subscribe((x) => {
      console.log(x);
    });
  }

  setShowFull() {
    this.showFull = !this.showFull;
  }
}
