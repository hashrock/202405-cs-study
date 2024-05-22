import { deleteDuplicates, ListNode, toString } from "./remove-dup-list.ts";
import { assertEquals } from "jsr:@std/assert/assert-equals";

Deno.test(function toStringTest() {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(2);
  const node4 = new ListNode(3);
  const node5 = new ListNode(3);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;

  assertEquals(toString(node1), "1,2,2,3,3");
});

Deno.test(function removeDupTest() {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(2);
  const node4 = new ListNode(3);
  const node5 = new ListNode(3);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;

  deleteDuplicates(node1);
  assertEquals(toString(node1), "1,2,3");
});
