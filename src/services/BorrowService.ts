import { Reader } from "../models/Reader";
import { Copy } from "../models/Copy";

export class BorrowService {
  borrow(reader: Reader, copy: Copy): boolean {
    return reader.borrowCopy(copy);
  }

  returnBook(reader: Reader, copy: Copy): boolean {
    return reader.returnCopy(copy);
  }
}
