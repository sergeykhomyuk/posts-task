export class Group<TCategory, TItem> {
  readonly category: TCategory;
  readonly items: TItem[];

  constructor({ category, items }: Partial<Group<TCategory, TItem>> = {}) {
    this.category = category;
    this.items = items || [];
  }
}
