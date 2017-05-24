import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shownews',
  templateUrl: './shownews.component.html',
  styleUrls: ['./shownews.component.css']
})

export class ShownewsComponent implements OnInit {

  articles: any;

  constructor(
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
