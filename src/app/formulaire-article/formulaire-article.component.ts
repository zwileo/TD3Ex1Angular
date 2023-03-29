import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-formulaire-article',
  templateUrl: './formulaire-article.component.html',
  styleUrls: ['./formulaire-article.component.css']
})
export class FormulaireArticleComponent implements OnInit {

  constructor(private fb:FormBuilder, private as:ArticleService) {}

  articleForm!:FormGroup;
  articleFormComplet$!:Observable<Article>  

  ngOnInit(): void {
    this.articleForm = this.fb.group({
      id:[null, Validators.required],
      titre:[null],
      // date:[null],
      contenu:[null]
    })

    this.articleFormComplet$ = this.articleForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        date: new Date()
      })
      )
    )
  }



  saveArticle(article:Article)
  {
    // this.as.addArticle(new Article(this.articleForm.value.id, this.articleForm.value.titre,
    //   this.articleForm.value.date, this.articleForm.value.contenu)).subscribe();

    // this.as.addArticle(this.articleForm.value).subscribe();

    this.as.addArticle(article).subscribe();
  }



}
