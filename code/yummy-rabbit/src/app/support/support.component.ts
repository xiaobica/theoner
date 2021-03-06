import { Component } from '@angular/core';
import { ArticleFormComponent } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'yummy-support',
  templateUrl: '../shared/article-form/article-form.component.html',
  styleUrls: ['../shared/article-form/article-form.component.css'],
})
export class SupportComponent extends ArticleFormComponent {
  ngOnInit(): void {
    this.getArticles('support');
  }
}