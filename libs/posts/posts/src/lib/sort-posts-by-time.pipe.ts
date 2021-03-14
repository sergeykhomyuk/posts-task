import { Pipe, PipeTransform } from '@angular/core';
import { Post, PostsService } from '@nitro/posts/core';

@Pipe({
  name: 'sortPostsByTime',
})
export class SortPostsByTimePipe implements PipeTransform {
  private readonly postsService: PostsService;

  constructor(postsService: PostsService) {
    this.postsService = postsService;
  }

  transform(posts: Post[]): Post[] {
    if (!posts) {
      return [];
    }

    const sortedPosts = this.postsService.sortPostsByTime(posts);

    return sortedPosts;
  }
}
