import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { CardListModel } from './models/CardListModel';
import { map } from 'rxjs/operators';
import { CommentListModel } from './models/CommentListModel';
import { CardModel } from './models/CardModel';
import { CommentModel } from './models/CommentModel';
@Injectable({
  providedIn: 'root',
})
export class MainserviceService {
  url: string = 'http://localhost:3000/api/';
  private currentCardSource = new ReplaySubject<number>();
  currentCard$ = this.currentCardSource.asObservable();
  constructor(private http: HttpClient) {}

  getAllCards(page?, pageSize?): Observable<CardListModel> {
    let params = new HttpParams().set('page', page).set('pageSize', pageSize);
    return this.http.get(this.url + 'cards', { params: params }).pipe(
      map((x) => {
        return new CardListModel(x);
      })
    );
  }

  getAllComments(id: number): Observable<CommentListModel> {
    return this.http.get(this.url + 'cards/' + id + '/comments').pipe(
      map((x) => {
        return new CommentListModel(x);
      })
    );
  }
  setCurrentCard(id: number) {
    this.currentCardSource.next(id);
  }

  likeDislike(card: CardModel) {
    return this.http.put(this.url + 'cards/' + card._id, card);
  }

  postComment(comment: CommentModel, id: number): Observable<CommentModel> {
    return this.http.post(this.url + 'cards/' + id + '/comments', comment).pipe(
      map((x) => {
        return new CommentModel(x);
      })
    );
  }
}
