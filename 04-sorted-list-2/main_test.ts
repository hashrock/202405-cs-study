import { fail } from "jsr:@std/assert/fail";
import { assertEquals } from "jsr:@std/assert/assert-equals";

import { deleteDuplicates, fromArray, toArray } from "./list.ts";

Deno.test(function testDup() {
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
