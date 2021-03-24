export class CommentModel {
  _id: number;
  text: string;
  author: string;
  date: string;
  cards: number;
  /**
   *
   */
  constructor(obj?: any) {
    this._id = (obj && obj._id) || null;
    this.text = (obj && obj.text) || null;
    this.author = (obj && obj.author) || null;
    this.date = (obj && obj.date) || null;
    this.cards = (obj && obj.cards) || null;
  }
}
