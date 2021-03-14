/* eslint-disable @typescript-eslint/no-explicit-any */

import { Injectable } from '@angular/core';
import { Assert, required, validate } from '@nitro/core';
import { Post } from '@nitro/posts/core';

@Injectable({
  providedIn: 'root',
})
export class PostsApiMappingService {
  @validate
  mapPostResponse(@required response: any): Post {
    Assert.isNotNull(response.id, 'response.id');

    const timestamp = parseInt(response.time, 10);
    const time = !isNaN(timestamp) ? new Date(timestamp * 1000) : null;

    const post = new Post({
      id: response.id,
      location: response.location,
      author: response.author,
      text: response.text,
      time: time,
    });

    return post;
  }
}
