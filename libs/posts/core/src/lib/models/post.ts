export class Post {
  readonly id: string;
  readonly location: string;
  readonly author: string;
  readonly text: string;
  readonly time: Date;

  constructor({ id, location, author, text, time }: Partial<Post> = {}) {
    this.id = id;
    this.location = location || '';
    this.author = author || '';
    this.text = text || '';
    this.time = time;
  }
}
