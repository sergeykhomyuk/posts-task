import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PostsApiService } from './posts-api.service';

describe('PostsApiService', () => {
  let service: PostsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(PostsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
