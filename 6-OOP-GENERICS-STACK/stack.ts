{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private _head?: StackNode;
    get size() {
      return this._size;
    }

    push(value: string): void {
      const node: StackNode = { value: value, next: this._head };
      this._head = node;
      this._size++;
    }

    pop(): string {
      if (this._head == null) {
        throw new Error("stack is empty");
      }

      const node = this._head;
      this._head = node.next;
      this._size--;
      return node.value;
    }
  }
}
