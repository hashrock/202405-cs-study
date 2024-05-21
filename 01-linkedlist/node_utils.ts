import { Node } from "./node.ts";

export function insert(node: Node, data: number) {
  const next = node.next;
  const item = new Node(data);
  item.prev = node;
  item.next = next;

  node.next = item;

  if (next !== null) {
    next.prev = item;
  }
}

export function remove(removeItem: Node) {
  const { prev, next } = removeItem;
  if (prev !== null) {
    prev.next = next;
  }
  if (next !== null) {
    next.prev = prev;
  }
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
