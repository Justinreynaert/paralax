// STILL HAS TO BE PROVIDED!!!!
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

  news: any;

  constructor(private http:Http) { }

  addNews(news) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:4500/news/addArticle', news, {headers: headers})
          .map(res => res.json());


  }

  getThreeArticles() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:4500/news/articles/three', {headers: headers})
        .map(res => res.json())
  }

  getAllArticles() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:4500/news/articles/all', {headers: headers})
        .map(res => res.json())
  }

  deleteArticle(id) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.delete('http://localhost:4500/news/articles/' + id, {headers: headers})
        .map(res => res.json())
  }


}
