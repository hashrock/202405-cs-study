import { assert, assertEquals } from "jsr:@std/assert";
import { isValid } from "./main.ts";

Deno.test(function addTest() {
  assert(isValid("()"));
  assert(isValid("(") === false);
  assert(isValid("[]"));
  assert(isValid("[)") === false);
  assert(isValid("([])"));
  assert(isValid("[])") === false);
  assert(isValid("([][])"));
  assert(isValid("({[}])") === false);
  assert(isValid(""));
  assert(isValid("[({[]})({})]"));
});
