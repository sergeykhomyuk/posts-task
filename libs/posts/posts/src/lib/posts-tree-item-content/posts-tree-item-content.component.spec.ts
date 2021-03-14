import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortPostsByTimePipe } from '../sort-posts-by-time.pipe';

import { PostsTreeItemContentComponent } from './posts-tree-item-content.component';

describe('PostsTreeItemContentComponent', () => {
  let component: PostsTreeItemContentComponent;
  let fixture: ComponentFixture<PostsTreeItemContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsTreeItemContentComponent, SortPostsByTimePipe],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsTreeItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
