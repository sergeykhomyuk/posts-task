import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Range } from '@nitro/core';
import { PostCategory, PostCategoryType } from '@nitro/posts/core';

@Component({
  selector: 'nitro-posts-tree-item-header',
  templateUrl: './posts-tree-item-header.component.html',
  styleUrls: ['./posts-tree-item-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsTreeItemHeaderComponent {
  @Input()
  category: PostCategory<unknown>;

  @Input()
  categoryPostsCount: number;

  get PostCategoryType(): typeof PostCategoryType {
    return PostCategoryType;
  }

  get categoryTimeValue(): Range<Date> {
    return this.category?.value as Range<Date>;
  }

  get categoryStringValue(): string {
    return this.category?.value as string;
  }
}
