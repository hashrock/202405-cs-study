export function isValid(s: string): boolean {
  let isOpen = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c === "(") {
      isOpen = true;
    }

    if (c === ")") {
      isOpen = false;
    }
  }

  // Error check
  if (isOpen) {
    return false;
  }

  return true;
}
