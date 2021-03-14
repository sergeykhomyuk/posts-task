import { Injectable } from '@angular/core';
import { startOfWeek, endOfWeek } from 'date-fns/fp';
import { Group, Range, required, validate } from '@nitro/core';
import {
  Post,
  PostCategory,
  PostCategoryType,
  PostStringCategory,
  PostTimeCategory,
} from './models';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  @validate
  groupPostsByCategoryType(
    @required posts: Post[],
    @required categoryType: PostCategoryType
  ): Group<PostCategory<unknown>, Post>[] {
    switch (categoryType) {
      case PostCategoryType.Week:
        return this.groupPostsByWeek(posts);
      case PostCategoryType.Author:
        return this.groupPostsByString(
          posts,
          PostCategoryType.Author,
          (post: Post) => post.author
        );
      case PostCategoryType.Location:
        return this.groupPostsByString(
          posts,
          PostCategoryType.Location,
          (post: Post) => post.location
        );
      default:
        throw new Error(`Unknown post category type: "${categoryType}".`);
    }
  }

  @validate
  sortPostsByTime(@required posts: Post[]): Post[] {
    const sortedPosts = posts.sort(
      (first: Post, second: Post) =>
        first.time.getTime() - second.time.getTime()
    );

    return sortedPosts;
  }

  @validate
  sortPostsGroupsByCategoryType(
    @required postsGroups: Group<PostCategory<unknown>, Post>[],
    @required categoryType: PostCategoryType
  ): Group<PostCategory<unknown>, Post>[] {
    switch (categoryType) {
      case PostCategoryType.Week:
        return postsGroups.sort(
          (
            first: Group<PostTimeCategory, Post>,
            second: Group<PostTimeCategory, Post>
          ) =>
            first.category.value.from.getTime() -
            second.category.value.from.getTime()
        );
      case PostCategoryType.Author:
      case PostCategoryType.Location:
        return postsGroups.sort(
          (
            first: Group<PostStringCategory, Post>,
            second: Group<PostStringCategory, Post>
          ) => first.category.value.localeCompare(second.category.value)
        );
      default:
        throw new Error(`Unknown posts category type: "${categoryType}".`);
    }
  }

  @validate
  updatePosts(@required posts: Post[], @required updatedPost: Post): Post[] {
    const updatedPosts = posts.map((post: Post) =>
      post.id === updatedPost.id ? updatedPost : post
    );

    return updatedPosts;
  }

  @validate
  private groupPostsByWeek(
    @required posts: Post[]
  ): Group<PostTimeCategory, Post>[] {
    const groupsByKey = posts.reduce(
      (result: Map<string, Group<PostTimeCategory, Post>>, post: Post) => {
        const startOfPostWeek = startOfWeek(post.time);
        const postGroupKey = startOfPostWeek.getTime().toString();

        const postGroup =
          result.get(postGroupKey) ||
          new Group({
            category: new PostTimeCategory({
              type: PostCategoryType.Week,
              key: postGroupKey,
              value: new Range<Date>({
                from: startOfPostWeek,
                to: endOfWeek(post.time),
              }),
            }),
          });

        postGroup.items.push(post);

        result.set(postGroupKey, postGroup);

        return result;
      },
      new Map<string, Group<PostTimeCategory, Post>>()
    );

    const groups = Array.from(groupsByKey.values());

    return groups;
  }

  @validate
  private groupPostsByString(
    @required posts: Post[],
    @required categoryType: PostCategoryType,
    @required getPostStringValue: (post: Post) => string
  ): Group<PostStringCategory, Post>[] {
    const groupsByKey = posts.reduce(
      (result: Map<string, Group<PostStringCategory, Post>>, post: Post) => {
        const value = getPostStringValue(post);
        const postGroupKey = value.trim().toLowerCase();

        const postGroup =
          result.get(postGroupKey) ||
          new Group({
            category: new PostStringCategory({
              type: categoryType,
              key: postGroupKey,
              value: value,
            }),
          });

        postGroup.items.push(post);

        result.set(postGroupKey, postGroup);

        return result;
      },
      new Map<string, Group<PostStringCategory, Post>>()
    );

    const groups = Array.from(groupsByKey.values());

    return groups;
  }
}
