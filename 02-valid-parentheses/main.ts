// 削除をうまくやる
// ３つisOpenを用意して境界でエラーチェック

const parenDict = {
  ")": "(",
  "]": "[",
  "}": "{",
};

export function isValid(s: string): boolean {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    switch (c) {
      case "(":
      case "[":
      case "{":
        stack.push(c);
        break;
      case ")":
      case "]":
      case "}": {
        const d = stack.pop();
        if (d !== parenDict[c]) {
          return false;
        }
        break;
      }
      default:
        throw new Error("カッコ以外入れないで");
    }
  }

  return stack.length === 0;
}
