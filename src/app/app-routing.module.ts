import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleByIdComponent } from './article-by-id/article-by-id.component';
import { ArticleComponent } from './article/article.component';
import { FormulaireArticleComponent } from './formulaire-article/formulaire-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';

const routes: Routes = [
  {path:'articles', component:ArticleComponent},
  {path:"addArticle", component:FormulaireArticleComponent},
  {path:'article/:id', component:ArticleByIdComponent},
  {path:'updateArticle/:id', component:ModifierArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
