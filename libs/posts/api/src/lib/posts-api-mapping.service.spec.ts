import { TestBed } from '@angular/core/testing';

import { PostsApiMappingService } from './posts-api-mapping.service';

describe('PostsApiMappingService', () => {
  let service: PostsApiMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsApiMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
