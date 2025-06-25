import { AbstractBook } from "./AbstractBook";

export class Copy {
  private isAvailable: boolean = true;

  constructor(private book: AbstractBook) {}

  public borrow(): boolean {
    if (!this.isAvailable) return false;
    this.isAvailable = false;
    return true;
  }

  public returnCopy(): void {
    this.isAvailable = true;
  }

  public isCopyAvailable(): boolean {
    return this.isAvailable;
  }

  public getBook(): AbstractBook {
    return this.book;
  }
}
