import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private as:ArticleService, private router:Router){ }

  listeA$!:Observable<Article[]>;
  a!:Article;

  ngOnInit(): void {
    this.listeA$ = this.as.getArticles();
  }

  supprimer(id:number)
  {
    this.as.delete(id).subscribe();
    this.router.navigate(['articles']);
  }

  modifier(id:number)
  {    
    
    this.router.navigate(['updateArticle/' + id]);
  }

}
