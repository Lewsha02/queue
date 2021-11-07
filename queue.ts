interface ObjectType<T> {
  [key: number]: T;
}

export class Queue<T> {
  private queue: ObjectType<T>;
  private head: number;
  private tail: number;

  constructor() {
    this.queue = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value: T): void {
    this.queue[this.tail] = value;
    this.tail++;
  }

  dequeue(): T {
    const value = this.queue[this.head];
    delete this.queue[this.head];
    this.head++;
    return value;
  }

  peek(): T {
    return this.queue[this.head];
  }
}
