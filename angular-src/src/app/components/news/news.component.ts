import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NewsService } from '../../services/news.service';
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
      private newsService: NewsService,
      private authService: AuthService,
      private router: Router) {


  }

  ngOnInit() {
  }

  onArticleSubmit() {
    const news = {
      title: this.title,
      content: this.content,
    };



    this.newsService.addNews(news).subscribe(data => {
      if(data) {
        this.flashMessage.show('Article made', {cssClass: 'alert-success', timeout: 3000});

        // Forced reload - need sexier solution!
        location.reload();
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});

      }
    });
  }
}