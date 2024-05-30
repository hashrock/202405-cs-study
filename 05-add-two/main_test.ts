import { assertEquals } from "jsr:@std/assert/assert-equals";
import { fromArray, toArray } from "./list.ts";
import { addTwoNumbers } from "./main.ts";
import { fail } from "jsr:@std/assert/fail";

Deno.test(function addTest() {
  const a1 = fromArray([2, 4, 3]);
  const a2 = fromArray([5, 6, 4]);

  const r = addTwoNumbers(a1, a2);
  if (r === null) {
    fail();
  }

  assertEquals(toArray(r), [7, 0, 8]);
});
