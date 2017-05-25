import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-shownews',
  templateUrl: './shownews.component.html',
  styleUrls: ['./shownews.component.css']
})

export class ShownewsComponent implements OnInit {

  articles: any;

  title: String;
  content: String;

  constructor(
      private flashMessage: FlashMessagesService,
      private newsService: NewsService,
      private router: Router) {


  }

  ngOnInit() {

    this.newsService.getAllArticles().subscribe(articles => {
          this.articles = articles;
        },

        err => {
          console.log(err);
          return false;
        });
  }

  onArticleSubmit() {
        const news = {
            title: this.title,
            content: this.content,
        };





        this.newsService.addNews(news).subscribe(data => {



            if(data) {

                const article = {
                    "_id": data._id,
                    "date": data.timestamp,
                    "title": news.title,
                    "content": news.content
                }

                this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
                this.articles.unshift(article);
                // Forced reload - need sexier solution!
            } else {
                this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});

            }

        })}





  destroyArticle(article) {
      console.log(article._id);

      let confirmOpt = confirm("You're about to remove the news article with title \'" + article.title + "\'. Are you sure about this?");

      if (confirmOpt) {

          // Change code to NOT remove but DISABLE --

          this.newsService.deleteArticle(article._id).subscribe();
          let index = this.articles.indexOf(article);
          this.articles.splice(index,1);
      }




  }



}
