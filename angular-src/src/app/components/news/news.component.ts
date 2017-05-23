import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  title: String;
  content: String;

  constructor(
      private flashMessage: FlashMessagesService,
      private authService: AuthService,
      private router: Router) {


  }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const news = {
      title: this.title,
      content: this.content,
    };

  }
}
