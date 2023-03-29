import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleByIdComponent } from './article-by-id.component';

describe('ArticleByIdComponent', () => {
  let component: ArticleByIdComponent;
  let fixture: ComponentFixture<ArticleByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
