import { ListNode } from "./list.ts";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
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
