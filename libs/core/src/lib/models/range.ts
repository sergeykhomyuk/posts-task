export class Range<T> {
  readonly from: T;
  readonly to: T;
  constructor({ from, to }: Partial<Range<T>> = {}) {
    this.from = from;
    this.to = to;
  }
}
