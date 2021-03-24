import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { MainserviceService } from '../mainservice.service';
import { CardModel } from '../models/CardModel';

@Component({
  selector: 'app-graphic-cards',
  templateUrl: './graphic-cards.component.html',
  styleUrls: ['./graphic-cards.component.css'],
})
export class GraphicCardsComponent implements OnInit {
  cards: CardModel[];
  count: number;
  page: number = 1;
  pageSize: number = 5;

  constructor(private service: MainserviceService) {}

  ngOnInit(): void {
    this.getCards(this.page, this.pageSize);
  }

  getCards(page, pageSize) {
    this.service.getAllCards(page, pageSize).subscribe((x) => {
      this.cards = x.results;
      this.count = x.count;
    });
  }

  nextPage() {
    this.page++;
    this.getCards(this.page, this.pageSize);
  }

  previousPage() {
    this.page--;
    this.getCards(this.page, this.pageSize);
  }

  setPageSize(size) {
    this.pageSize = size;
    this.getCards(this.page, this.pageSize);
  }
}
