import { Range } from '@nitro/core';
import { PostCategory } from './post-category';

export class PostTimeCategory extends PostCategory<Range<Date>> {
  constructor({ type, key, value }: Partial<PostTimeCategory> = {}) {
    super({ type, key, value });
  }
}
