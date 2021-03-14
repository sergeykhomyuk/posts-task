import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TuiDay, TuiTime } from '@taiga-ui/cdk';
import { Assert, maxLengthValidator, notEmptyValidator } from '@nitro/core';
import { Post, postsConfig } from '@nitro/posts/core';

@Component({
  selector: 'nitro-edit-post-form',
  templateUrl: './edit-post-form.component.html',
  styleUrls: ['./edit-post-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPostFormComponent implements OnChanges {
  private readonly formBuilder: FormBuilder;

  @Input()
  post: Post;

  @Output()
  readonly updated: EventEmitter<Post>;

  postForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;

    this.updated = new EventEmitter<Post>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const componentChanges = changes as {
      [TProperty in keyof EditPostFormComponent]: SimpleChange;
    };

    const postChange = componentChanges.post;
    if (postChange) {
      this.onPostChanged(postChange.currentValue as Post);
    }
  }

  onUpdatePost() {
    Assert.isNotNull(this.post, 'this.post');
    Assert.isNotNull(this.postForm, 'this.postForm');

    const updatedPost = new Post({
      ...this.post,
      author: this.postForm.value.author.trim(),
      location: this.postForm.value.location.trim(),
    });

    this.updated.next(updatedPost);
  }

  onReset() {
    this.onPostChanged(this.post);
  }

  onPostChanged(post: Post) {
    this.postForm = this.formBuilder.group({
      author: [
        post?.author || '',
        [
          notEmptyValidator,
          maxLengthValidator(postsConfig.validation.author.maxLength),
        ],
      ],
      location: [
        post?.location || '',
        [
          notEmptyValidator,
          maxLengthValidator(postsConfig.validation.location.maxLength),
        ],
      ],
      time: [
        [
          TuiDay.fromLocalNativeDate(post?.time),
          new TuiTime(post?.time.getHours(), post?.time.getMinutes()),
        ],
      ],
      text: [post?.text || ''],
    });
  }
}
