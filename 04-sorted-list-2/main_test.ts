import { fail } from "jsr:@std/assert/fail";
import { assertEquals } from "jsr:@std/assert/assert-equals";

import { fromArray, toArray } from "./list.ts";
import { deleteDuplicates } from "./main.ts";

Deno.test(function testDup1() {
  const ret = deleteDuplicates(fromArray([
    1,
    2,
    3,
    3,
    4,
    4,
    5,
  ]));

  const expected = [1, 2, 5];

  if (ret === null) {
    fail();
  }

  assertEquals(toArray(ret), expected);
});

Deno.test(function testDup2() {
  const ret = deleteDuplicates(fromArray([
    1,
    1,
    1,
    2,
    3,
  ]));

  const expected = [2, 3];

  if (ret === null) {
    fail();
  }

  assertEquals(toArray(ret), expected);
});
