import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { required, validate } from '@nitro/core';
import { Post } from '@nitro/posts/core';

@Component({
  selector: 'nitro-posts-tree-item-content',
  templateUrl: './posts-tree-item-content.component.html',
  styleUrls: ['./posts-tree-item-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsTreeItemContentComponent {
  @Input()
  posts: Post[];

  @Output()
  readonly postUpdated: EventEmitter<Post>;

  constructor() {
    this.postUpdated = new EventEmitter<Post>();
  }

  @validate
  onPostUpdated(@required post: Post): void {
    this.postUpdated.next(post);
  }

  @validate
  trackByPost(index: number, @required post: Post): string {
    return post.id;
  }
}
