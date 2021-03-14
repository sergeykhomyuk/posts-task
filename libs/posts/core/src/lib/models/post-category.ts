import { PostCategoryType } from './post-category-type';

export abstract class PostCategory<T> {
  readonly type: PostCategoryType;
  readonly key: string;
  readonly value: T;

  constructor({ type, key, value }: Partial<PostCategory<T>> = {}) {
    this.type = type;
    this.key = key;
    this.value = value;
  }
}
