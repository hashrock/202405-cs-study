import { fail } from "jsr:@std/assert/fail";
import { assertEquals } from "jsr:@std/assert/assert-equals";

import { fromArray, toArray } from "./list.ts";
import { deleteDuplicates } from "./main.ts";

Deno.test(function testDup() {
  const ret = deleteDuplicates(fromArray([
    1,
    2,
    2,
    2,
    3,
  ]));

  const expected = [1, 3];

  if (ret === null) {
    fail();
  }

  assertEquals(toArray(ret), expected);
});
