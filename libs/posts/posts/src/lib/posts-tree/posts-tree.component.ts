import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  EventEmitter,
  Output,
} from '@angular/core';
import { Group, required, validate } from '@nitro/core';
import {
  Post,
  PostCategory,
  PostCategoryType,
  PostsService,
} from '@nitro/posts/core';

@Component({
  selector: 'nitro-posts-tree',
  templateUrl: './posts-tree.component.html',
  styleUrls: ['./posts-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsTreeComponent implements OnChanges {
  private readonly postsService: PostsService;

  @Input()
  posts: Post[];

  @Output()
  readonly postUpdated: EventEmitter<Post>;

  postsGroups: Group<PostCategory<unknown>, Post>[];

  state: {
    groupPostsByCategoryType: PostCategoryType;
  };

  constructor(postsService: PostsService) {
    this.postsService = postsService;

    this.postUpdated = new EventEmitter<Post>();

    this.postsGroups = [];

    this.state = {
      groupPostsByCategoryType: PostCategoryType.Week,
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    const componentChanges = changes as {
      [TProperty in keyof PostsTreeComponent]: SimpleChange;
    };

    const postsChange = componentChanges.posts;

    if (postsChange) {
      this.updatePostsGroups(postsChange.currentValue as Post[]);
    }
  }

  @validate
  onPostUpdated(@required post: Post): void {
    this.postUpdated.next(post);
  }

  @validate
  onCategoryTypeChanged(@required categoryType: PostCategoryType): void {
    this.state.groupPostsByCategoryType = categoryType;

    this.updatePostsGroups(this.posts);
  }

  @validate
  trackByGroup(
    index: number,
    @required group: Group<PostCategory<unknown>, Post>
  ): string {
    return group.category.key;
  }

  private updatePostsGroups(posts: Post[]): void {
    if (!posts || posts.length === 0) {
      this.postsGroups = [];
      return;
    }

    this.postsGroups = this.postsService.groupPostsByCategoryType(
      posts,
      this.state.groupPostsByCategoryType
    );
  }
}
