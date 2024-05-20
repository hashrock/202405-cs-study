export class Node {
  data: number;
  next: Node | null = null;

  constructor(data: number) {
    this.data = data;
  }
}

export function appendTail(node: Node, data: number) {
  const end = new Node(data);
  let n = node;
  while (n.next !== null) {
    n = n.next;
  }
  n.next = end;
}
