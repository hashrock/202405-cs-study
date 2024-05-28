export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function toString(head: ListNode | null): string {
  const output: number[] = [];
  if (head === null) {
    return "";
  }
  let cur: ListNode | null = head;
  while (cur) {
    output.push(cur.val);
    cur = cur.next;
  }
  return output.join(",");
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let start = head;
  if (start === null) {
    return head;
  }

  while (start) {
    let cur: ListNode | null = start;

    while (cur) {
      if (cur?.next === null || start.val !== cur?.next?.val) {
        break;
      }
      cur = cur.next;
    }

    start.next = cur.next;
    start = start.next;
  }

  return head;
}

export function fromArray(data: number[]) {
  let root: ListNode | null = null;

  if (data === null || data.length === 0) {
    throw new Error("data should not be empty");
  }

  for (let i = 0; i < data.length; i++) {
    if (root === null) {
      root = new ListNode(data[i]);
    } else {
      appendTail(root, data[i]);
    }
  }

  return root;
}

export function toArray(root: ListNode) {
  const output = [];
  let cur = root;
  while (true) {
    output.push(cur.val);
    if (cur.next === null) {
      break;
    } else {
      cur = cur.next;
    }
  }
  return output;
}

export function appendTail(node: ListNode, data: number) {
  const end = new ListNode(data);
  let n = node;
  while (n.next !== null) {
    n = n.next;
  }
  n.next = end;
}
