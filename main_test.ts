import { assertEquals } from "jsr:@std/assert";
import { appendTail, Node } from "./main.ts";

Deno.test(function appendTest() {
  const root = new Node(1);
  root.next = new Node(2);
  appendTail(root, 3);

  assertEquals(root.data, 1);
  assertEquals(root.next.data, 2);
  assertEquals(root.next?.next?.data, 3);
});
