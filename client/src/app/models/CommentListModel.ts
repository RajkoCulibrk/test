import { CommentModel } from './CommentModel';
export class CommentListModel {
  count: number;
  results: CommentModel[];
  /**
   *
   */
  constructor(obj?: any) {
    this.count = (obj && obj.count) || null;
    this.results = (obj && obj.results) || null;
  }
}
