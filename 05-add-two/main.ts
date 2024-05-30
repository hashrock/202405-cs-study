/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { fromArray, ListNode, toArray } from "./list.ts";

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (l1 === null || l2 === null) {
    return null;
  }

  const a1 = toArray(l1);
  const a2 = toArray(l2);

  const a = Number(a1.reverse().join(""));
  const b = Number(a2.reverse().join(""));

  const r = fromArray(
    (a + b).toString().split("").reverse().map((i) => Number(i)),
  );

  return r;
}
