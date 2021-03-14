import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { coreConfig, LoggerService } from '@nitro/core';
import { Post } from '@nitro/posts/core';

import { PostsApiMappingService } from './posts-api-mapping.service';
import { postsApiConfig } from './posts-api.config';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  private readonly http: HttpClient;
  private readonly postsApiMappingService: PostsApiMappingService;
  private readonly loggerService: LoggerService;

  constructor(
    http: HttpClient,
    postsApiMappingService: PostsApiMappingService,
    loggerService: LoggerService
  ) {
    this.http = http;
    this.postsApiMappingService = postsApiMappingService;
    this.loggerService = loggerService;
  }

  async getPosts(): Promise<Post[]> {
    const url = `${coreConfig.api.baseUrl}/${postsApiConfig.posts.url}/get.json`;

    let response: { posts: unknown[] };

    try {
      response = await this.http.get<{ posts: unknown[] }>(url).toPromise();
    } catch (error) {
      this.loggerService.error('Failed to load posts', error);
      this.loggerService.captureException(error);

      const apiError = error; // Map/handle server-side error
      throw apiError;
    }

    const posts =
      response.posts?.map<Post>((postResponse: unknown) =>
        this.postsApiMappingService.mapPostResponse(postResponse)
      ) || [];

    return posts;
  }
}
