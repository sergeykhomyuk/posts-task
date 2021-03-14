import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsApiService } from '@nitro/posts/api';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let postsApiServiceStub: Partial<PostsApiService>;

  beforeEach(async () => {
    postsApiServiceStub = {
      getPosts: () => Promise.resolve([]),
    };

    await TestBed.configureTestingModule({
      declarations: [PostsComponent],
      providers: [{ provide: PostsApiService, useValue: postsApiServiceStub }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
