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
    let cur = start.next;

    while (cur) {
      if (start.val !== cur.val) {
        start.next = cur;
        break;
      }
      cur = cur.next;
    }

    start = start.next;
  }

  return head;
}
