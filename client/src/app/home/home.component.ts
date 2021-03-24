import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { MainserviceService } from '../mainservice.service';
import { CardModel } from '../models/CardModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MainserviceService) {}

  ngOnInit(): void {}
}
