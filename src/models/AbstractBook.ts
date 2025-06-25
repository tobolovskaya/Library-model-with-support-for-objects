import { Author } from "./Author";

export abstract class AbstractBook {
    protected constructor(
    protected title: string,
    protected year: number,
    protected author: Author
     ) {}

  abstract getDescription(): string;

  public getTitle(): string {
    return this.title;
  }

  public getYear(): number {
    return this.year;
  }

  public getAuthor(): Author {
    return this.author;
  }
}
