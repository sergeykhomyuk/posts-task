import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
  TuiAccordionModule,
  TuiBadgeModule,
  TuiFieldErrorModule,
  TuiInputDateTimeModule,
  TuiInputModule,
  TuiIslandModule,
  TuiTextAreaModule,
} from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiHostedDropdownModule,
  TuiLoaderModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostsComponent } from './posts/posts.component';
import { PostsTreeComponent } from './posts-tree/posts-tree.component';
import { PostsTreeItemHeaderComponent } from './posts-tree-item-header/posts-tree-item-header.component';
import { PostsTreeItemContentComponent } from './posts-tree-item-content/posts-tree-item-content.component';
import { EditPostFormComponent } from './edit-post-form/edit-post-form.component';
import { SortPostsByTimePipe } from './sort-posts-by-time.pipe';
import { PostsTreeHeaderComponent } from './posts-tree-header/posts-tree-header.component';
import { SortPostsGroupsPipe } from './sort-posts-groups.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiAccordionModule,
    TuiSvgModule,
    TuiInputModule,
    TuiInputDateTimeModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiButtonModule,
    TuiTextAreaModule,
    TuiFieldErrorModule,
    TuiBadgeModule,
    TuiLoaderModule,
    TuiIslandModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: PostsPageComponent },
    ]),
  ],
  declarations: [
    PostsPageComponent,
    PostsComponent,
    PostsTreeComponent,
    PostsTreeItemHeaderComponent,
    PostsTreeItemContentComponent,
    EditPostFormComponent,
    SortPostsByTimePipe,
    PostsTreeHeaderComponent,
    SortPostsGroupsPipe,
  ],
})
export class PostsModule {}
