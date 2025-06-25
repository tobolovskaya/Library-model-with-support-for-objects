import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class EBook extends AbstractBook {
  constructor(
    title: string,
    year: number,
    author: Author,
    private url: string
  ) {
    super(title, year, author);
    author.addBook(this);
  }

  public getUrl(): string {
    return this.url;
  }

  public getDescription(): string {
    return `EBook: "${this.title}", written by ${this.author.getName()} (${this.year}), available at: ${this.url}`;
  }
}