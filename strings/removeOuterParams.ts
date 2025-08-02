function f(str: string): string {
  let ans = "";
  let depth = 0;
  for (const char of str) {
    switch (char) {
      case "(":
        if (depth > 0) {
          ans += char;
        }
        depth++;
        break;
      case ")":
        depth--;
        if (depth > 0) {
          ans += char;
        }
        break;
    }
  }
  return ans;
}

console.log(`-- testing starts --`);

// valid cases
console.assert(f("(()())(())") === "()()()", `f-1 failed: expected "()()()" got "${f("(()())(())")}"`);
console.assert(f("(()())(())(()(()))") === "()()()()(())", `f-2 failed`);
console.assert(f("") === "", `f-3 failed: empty string`);
console.assert(f("()") === "", `f-4 failed: single primitive`);
console.assert(f("(())") === "()", `f-5 failed: nested single`);
console.assert(f("()()") === "", `f-6 failed: multiple primitives`);
console.assert(f("((()()))") === "(()())", `f-7 failed: complex nesting`);

console.log(`-- testing ends --`);

export default {}
