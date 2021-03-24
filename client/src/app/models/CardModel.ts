export class CardModel {
  _id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  grade: number;

  /**
   *
   */
  constructor(obj?: any) {
    this._id = (obj && obj._id) || null;
    this.title = (obj && obj.title) || null;
    this.subtitle = (obj && obj.subtitle) || null;
    this.description = (obj && obj.description) || null;
    this.image = (obj && obj.image) || null;
    this.grade = (obj && obj.grade) || null;
  }
}
