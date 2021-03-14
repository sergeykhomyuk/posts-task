import { PostCategory } from './post-category';

export class PostStringCategory extends PostCategory<string> {
  constructor({ type, key, value }: Partial<PostStringCategory> = {}) {
    super({ type, key, value });
  }
}
