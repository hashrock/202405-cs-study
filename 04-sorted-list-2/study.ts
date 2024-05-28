let prev = null;
let prevprev = null;

const input = [1, 2, 2, 3];

for (let i = 0; i < input.length;) {
  // 1. 条件チェック
  // 2. 表示処理
  console.log(input[i], prevprev, prev, i);

  // 3. 次の要素に対するチェック（シーケンスの境界に対する処理）
  if (input[i] !== input[i + 1]) {
    console.log("----");
  }

  // 4. インクリメント
  prevprev = prev;
  prev = i;
  i++;
}
