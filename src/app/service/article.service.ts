import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  // listeA:Article[] 
  // = [
  //   new Article(1, "IntiFormation", new Date(2023, 4, 15), "Java/JEE"),
  //   new Article(1, "IntiFormation", new Date(2023, 4, 15), "Java/JEE"),
  //   new Article(1, "IntiFormation", new Date(2023, 4, 15), "Java/JEE")
  // ];

  constructor(private http:HttpClient) { }

  getArticles():Observable<Article[]>
  {  
    // return this.listeA;
    return this.http.get<Article[]>("http://localhost:8080/article/listeArticle");
  }

  addArticle(article:Article):Observable<Article>
  {
    return this.http.post<Article>("http://localhost:8080/article/saveArticle", article);
  }

  delete(id:number):Observable<void>
  {
    return this.http.delete<void>("http://localhost:8080/article/deleteArticle/" + id);
  }

  getArticleById(id:number):Observable<Article>
  {
    return this.http.get<Article>("http://localhost:8080/article/articleId/" + id);
  }

  modifier(article:Article):Observable<void>
  {
    console.log(article)
    return this.http.put<void>("http://localhost:8080/article/modifierArticle", article);
  }
}
