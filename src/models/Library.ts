import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";
import { Copy } from "./Copy";
import { Reader } from "./Reader";
import { Book } from "./Book";
import { EBook } from "./EBook";

export class Library {
  private books: AbstractBook[] = [];
  private authors: Author[] = [];
  private copies: Copy[] = [];
  private readers: Reader[] = [];

  public addBook(book: AbstractBook): void {
    this.books.push(book);
  }

  public addAuthor(author: Author): void {
    this.authors.push(author);
  }

  public addCopy(copy: Copy): void {
    this.copies.push(copy);
  }

  public addReader(reader: Reader): void {
    this.readers.push(reader);
  }

  public getAvailableCopies(): Copy[] {
    return this.copies.filter((copy) => copy.isCopyAvailable());
  }

  public findBooksByAuthor(authorName: string): AbstractBook[] {
    const author = this.authors.find((a) => a.getName() === authorName);
    return author ? author.getBooks() : [];
  }
}
