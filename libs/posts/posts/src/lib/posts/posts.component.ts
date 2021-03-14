import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { required, validate } from '@nitro/core';
import { PostsApiService } from '@nitro/posts/api';
import { Post, PostsService } from '@nitro/posts/core';

@Component({
  selector: 'nitro-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit {
  private readonly ref: ChangeDetectorRef;
  private readonly postsService: PostsService;
  private readonly postsApiService: PostsApiService;

  posts: Post[];

  state: {
    isLoading: boolean;
    isFailed: boolean;
  };

  constructor(
    ref: ChangeDetectorRef,
    postsService: PostsService,
    postsApiService: PostsApiService
  ) {
    this.ref = ref;
    this.postsService = postsService;
    this.postsApiService = postsApiService;

    this.posts = [];

    this.state = {
      isLoading: false,
      isFailed: false,
    };
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  onTryLoadPosts(): void {
    this.loadPosts();
  }

  @validate
  onPostUpdated(@required post: Post): void {
    const updatedPosts = this.postsService.updatePosts(this.posts, post);
    this.onPostsLoaded(updatedPosts);
  }

  private async loadPosts(): Promise<void> {
    this.state.isLoading = true;
    this.state.isFailed = false;

    try {
      const posts = await this.postsApiService.getPosts();
      this.onPostsLoaded(posts);
    } catch {
      this.state.isFailed = true;
    } finally {
      this.state.isLoading = false;
      this.ref.detectChanges();
    }
  }

  @validate
  private onPostsLoaded(@required posts: Post[]): void {
    this.posts = posts;
  }
}
