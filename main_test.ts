import { assertEquals } from "jsr:@std/assert";
import { appendTail, Node } from "./main.ts";

function setup() {
  const root = new Node(1);
  appendTail(root, 2);
  appendTail(root, 3);
  return root;
}

Deno.test(function appendTest() {
  const root = setup();
  assertEquals(root.data, 1);
  assertEquals(root.next?.data, 2);
  assertEquals(root.next?.prev?.data, 1);
  assertEquals(root.next?.next?.data, 3);
});

Deno.test(function insertTest() {
  const root = setup();
});
