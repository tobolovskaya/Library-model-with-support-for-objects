import { Copy } from "./Copy";

export class Reader {
  private borrowedCopies: Copy[] = [];

  constructor(private id: string, private name: string) {}

  public borrowCopy(copy: Copy): boolean {
    if (copy.borrow()) {
      this.borrowedCopies.push(copy);
      return true;
    }
    return false;
  }

  public returnCopy(copy: Copy): boolean {
    const index = this.borrowedCopies.indexOf(copy);
    if (index >= 0) {
      copy.returnCopy();
      this.borrowedCopies.splice(index, 1);
      return true;
    }
    return false;
  }

  public getName(): string {
    return this.name;
  }

  public getId(): string {
    return this.id;
  }
}
