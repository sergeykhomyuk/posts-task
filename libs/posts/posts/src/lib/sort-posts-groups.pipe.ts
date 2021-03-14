import { Pipe, PipeTransform } from '@angular/core';
import { Group } from '@nitro/core';
import {
  Post,
  PostCategory,
  PostCategoryType,
  PostsService,
} from '@nitro/posts/core';

@Pipe({
  name: 'sortPostsGroups',
})
export class SortPostsGroupsPipe implements PipeTransform {
  private readonly postsService: PostsService;

  constructor(postsService: PostsService) {
    this.postsService = postsService;
  }

  transform(
    postsGroups: Group<PostCategory<unknown>, Post>[],
    categoryType: PostCategoryType
  ): Group<PostCategory<unknown>, Post>[] {
    if (!postsGroups || !categoryType) {
      return [];
    }

    const sortedPostsGroups = this.postsService.sortPostsGroupsByCategoryType(
      postsGroups,
      categoryType
    );

    return sortedPostsGroups;
  }
}
