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
