import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { EditPostFormComponent } from './edit-post-form.component';

describe('EditPostFormComponent', () => {
  let component: EditPostFormComponent;
  let fixture: ComponentFixture<EditPostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPostFormComponent],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
