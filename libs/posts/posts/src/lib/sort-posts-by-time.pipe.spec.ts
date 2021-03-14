import { PostsService } from '@nitro/posts/core';
import { SortPostsByTimePipe } from './sort-posts-by-time.pipe';

describe('SortPostsByTimePipe', () => {
  it('create an instance', () => {
    const pipe = new SortPostsByTimePipe(new PostsService());
    expect(pipe).toBeTruthy();
  });
});
