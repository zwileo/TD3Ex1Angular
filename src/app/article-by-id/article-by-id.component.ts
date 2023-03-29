import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article-by-id',
  templateUrl: './article-by-id.component.html',
  styleUrls: ['./article-by-id.component.css']
})
export class ArticleByIdComponent implements OnInit {

  id!:number;

  constructor(private as:ArticleService, private ar:ActivatedRoute){
    this.id = ar.snapshot.params['id'];
  }

  art$!:Observable<Article>;

  ngOnInit(): void {
    this.art$ = this.as.getArticleById(this.id);

    console.log(this.art$.subscribe())
  }



}
