// 削除をうまくやる
// ３つisOpenを用意して境界でエラーチェック

export function isValid(s: string): boolean {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    let d = null;

    switch (c) {
      case "(":
        stack.push(c);
        break;
      case "[":
        stack.push(c);
        break;
      case "{":
        stack.push(c);
        break;
      case ")":
        d = stack.pop();
        if (d !== "(") {
          return false;
        }
        break;
      case "]":
        d = stack.pop();
        if (d !== "[") {
          return false;
        }
        break;
      case "}":
        d = stack.pop();
        if (d !== "{") {
          return false;
        }
        break;
      default:
        throw new Error("カッコ以外入れないで");
    }
  }

  return stack.length === 0;
}
