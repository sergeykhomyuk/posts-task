import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nitro-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsPageComponent {}
