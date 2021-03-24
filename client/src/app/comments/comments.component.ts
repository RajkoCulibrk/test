import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../mainservice.service';
import { CommentListModel } from '../models/CommentListModel';
import { CommentModel } from '../models/CommentModel';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  constructor(private service: MainserviceService) {}
  currentCardId: number;
  commentList: CommentModel[];
  author: string;
  text: string;
  ngOnInit(): void {
    this.subscirbe();
  }

  subscirbe() {
    this.service.currentCard$.subscribe((x) => {
      this.service.getAllComments(x).subscribe((y) => {
        this.commentList = y.results;
        this.currentCardId = x;
      });
    });
  }

  postComment(comment) {
    let newComment = new CommentModel(comment);
    console.log(newComment);
    this.service.postComment(newComment, this.currentCardId).subscribe((x) => {
      this.commentList.unshift(x);
    });
  }
}
