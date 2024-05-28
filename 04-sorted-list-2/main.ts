import { ListNode } from "./list.ts";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let start = head;
  let end: ListNode | null = null;
  let prevEnd: ListNode | null = null;

  while (start) {
    let cur: ListNode | null = start;
    let cnt = 1;

    while (cur) {
      if (cur?.next === null || start.val !== cur?.next?.val) {
        prevEnd = end;
        end = cur;
        break;
      }
      cur = cur.next;
      cnt++;
    }

    if (prevEnd) {
      prevEnd.next = cur.next;
    }
    prevEnd = cur;
    // start.next = cur.next;
    start = start.next;
  }

  return head;
}
