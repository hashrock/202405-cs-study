export class Node {
  data: number;
  next: Node | null = null;
  prev: Node | null = null;

  constructor(data: number) {
    this.data = data;
  }
}

export function insert(node: Node, data: number) {
  // TODO
}

export function remove(node: Node) {
  // TODO
}

export function appendTail(node: Node, data: number) {
  const end = new Node(data);
  let n = node;
  while (n.next !== null) {
    n = n.next;
  }
  n.next = end;
  end.prev = n;
}

export function toString(node: Node) {
  let out = "";
  let n = node;
  while (n.next !== null) {
    out += n.data + ",";
    n = n.next;
  }
  out += n.data;
  return out;
}
