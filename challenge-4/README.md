## 😵‍💫 Turn the parentheses around

In Santa's workshop 🎅, some Christmas messages have been written in a peculiar way: **the letters inside the parentheses must be read backwards**.

**Santa needs these messages to be properly formatted**. Your task is to write a function that takes a text string and reverses the characters inside each pair of parentheses, removing the parentheses in the final message.

However, keep in mind that **nested parentheses may exist**, so you must reverse the characters in the correct order.

```js
const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus

// Step by Step:
// 1. We invert the nested -> sa(ualcatn)s
// 2. We invest what is left -> santaclaus
```

**Notes:**

- Input strings will always be well-formed with correctly matching parentheses, you don't need to validate them.
- There should be no parentheses in the final message.
- The maximum nesting level is 2.
