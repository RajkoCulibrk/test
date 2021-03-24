import { CardModel } from './CardModel';

export class CardListModel {
  count: number;
  results: CardModel[];
  /**
   *
   */
  constructor(obj?: any) {
    this.count = (obj && obj.count) || null;
    this.results = (obj && obj.results) || null;
  }
}
