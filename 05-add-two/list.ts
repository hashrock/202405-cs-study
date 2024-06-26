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

export function cloneList(head: ListNode | null): ListNode | null {
  let readCur = head;
  let output = null;
  let writePrev: ListNode | null = null;

  while (readCur) {
    const node = new ListNode(readCur.val);
    if (output === null) {
      output = node;
    } else {
      if (writePrev !== null) {
        writePrev.next = node;
      }
    }
    writePrev = node;
    readCur = readCur.next;
  }

  return output;
}
