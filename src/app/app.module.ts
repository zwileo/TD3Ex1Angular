import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { FormulaireArticleComponent } from './formulaire-article/formulaire-article.component';
import { ArticleByIdComponent } from './article-by-id/article-by-id.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    FormulaireArticleComponent,
    ArticleByIdComponent,
    ModifierArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
