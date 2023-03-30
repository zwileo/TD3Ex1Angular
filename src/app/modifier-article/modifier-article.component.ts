import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})
export class ModifierArticleComponent implements OnInit {

  ide!:number;
  articleForm!: FormGroup;

  constructor(private ar:ActivatedRoute, private as:ArticleService, private fb:FormBuilder)
  {
    this.ide = this.ar.snapshot.params['id'];    
  }

  ngOnInit(): void {                           //data nom de variable aléatoire pour dire qu'on repren les données de cette fonction
    this.as.getArticleById(this.ide).subscribe(data => {
      this.articleForm = this.fb.group({
        id:[data.id, Validators.required],
        titre:[data.titre],
        date:[data.date],
        contenu:[data.contenu]
      })
    })   
  }

  updateArticle()
  {
    console.log(this.articleForm.value)
    this.as.modifier(this.articleForm.value).subscribe();
  }

}
