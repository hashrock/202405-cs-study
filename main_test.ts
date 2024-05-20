import { assertEquals, fail } from "jsr:@std/assert";
import { appendTail, insert, Node, toString } from "./main.ts";

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

Deno.test(function toStringTest1() {
  const root = setup();
  assertEquals(toString(root), "1,2,3");
});

Deno.test(function toStringTest2() {
  const root = new Node(1);
  assertEquals(toString(root), "1");
});

Deno.test(function insertTest() {
  const root = setup();
  const insertPoint = root.next;
  if (insertPoint === null) {
    fail();
  }
  insert(insertPoint, 2.5);
});
