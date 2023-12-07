## 😏 The naughty elf

In Santa's workshop, **a mischievous elf** has been playing around in the gift-making chain, adding or removing an unplanned step.

You have the original sequence of steps in the original manufacturing and the modified modified sequence which may include an extra step or be missing a step.

Your task is to **write a function that identifies and returns the first extra step that has been added or removed in the manufacturing chain**. If there is no difference between the sequences, it returns an empty string.

```js
const original = "abcd";
const modified = "abcde";
findNaughtyStep(original, modified); // 'e'

const original = "stepfor";
const modified = "stepor";
findNaughtyStep(original, modified); // 'f'

const original = "abcde";
const modified = "abcde";
findNaughtyStep(original, modified); // ''
```

**To take into account:**

- There will always be one step difference or none at all.
- The modification can occur anywhere in the chain.
- The original sequence may be empty.
