import { ListNode } from "./list.ts";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let readStartCur = head;
  let output = null;
  let writePrev: ListNode | null = null;

  while (readStartCur) {
    // シーケンス末尾まで移動
    let sequenceCount = 1;
    let cur: ListNode | null = readStartCur;
    while (cur && cur.next && cur.val === cur.next.val) {
      cur = cur.next;
      sequenceCount++;
    }

    // ノードを複製
    const node = new ListNode(readStartCur.val);
    if (output === null) {
      if (sequenceCount === 1) {
        output = node;
        // 次のループへ
        writePrev = node;
      }
    } else {
      // ノードを接続
      if (writePrev !== null && sequenceCount === 1) {
        writePrev.next = node;
        // 次のループへ
        writePrev = node;
      }
    }

    readStartCur = cur.next;
  }

  return output;
}
