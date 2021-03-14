import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { required, validate } from '@nitro/core';
import { PostCategoryType } from '@nitro/posts/core';

@Component({
  selector: 'nitro-posts-tree-header',
  templateUrl: './posts-tree-header.component.html',
  styleUrls: ['./posts-tree-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsTreeHeaderComponent {
  @Input()
  categoryType: PostCategoryType;

  @Output()
  readonly categoryTypeChanged: EventEmitter<PostCategoryType>;

  state: {
    isOpen: boolean;
  };

  get PostCategoryType(): typeof PostCategoryType {
    return PostCategoryType;
  }

  constructor() {
    this.categoryTypeChanged = new EventEmitter<PostCategoryType>();

    this.state = { isOpen: false };
  }

  @validate
  onCategoryTypeChanged(@required categoryType: PostCategoryType): void {
    this.state.isOpen = false;

    if (this.categoryType !== categoryType) {
      this.categoryTypeChanged.next(categoryType);
    }
  }
}
