{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private _head?: StackNode<T>;
    get size() {
      return this._size;
    }

    push(value: T): void {
      const node: StackNode<T> = { value: value, next: this._head };
      this._head = node;
      this._size++;
    }

    pop(): T {
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
