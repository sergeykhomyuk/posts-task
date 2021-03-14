import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortPostsGroupsPipe } from '../sort-posts-groups.pipe';

import { PostsTreeComponent } from './posts-tree.component';

describe('PostsTreeComponent', () => {
  let component: PostsTreeComponent;
  let fixture: ComponentFixture<PostsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsTreeComponent, SortPostsGroupsPipe],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
