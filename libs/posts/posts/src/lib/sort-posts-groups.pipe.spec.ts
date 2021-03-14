import { PostsService } from '@nitro/posts/core';
import { SortPostsGroupsPipe } from './sort-posts-groups.pipe';

describe('SortPostsGroupsPipe', () => {
  it('create an instance', () => {
    const pipe = new SortPostsGroupsPipe(new PostsService());
    expect(pipe).toBeTruthy();
  });
});
