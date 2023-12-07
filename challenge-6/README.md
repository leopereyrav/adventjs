## 🦌 The reindeer on trial

The elves are cataloging Santa's reindeer 🦌 based on how far they can travel.

To do this, they have a movements text string where each character represents the direction of the reindeer's movement:

- `>` = Move to the right
- `<` = Go left
- `*` = Can move forward or backward

For example, if the movement is `>>*<`, you go right twice, then you can go right or left (whichever maximizes the final distance traveled) and then go left.

The elves want to know what is the maximum distance the reindeer travels when **completing all movements**.

**In the example above, the maximum distance the reindeer travels is 2**. It goes right twice +2, then with the \* you can go right again to maximize the distance +1 and then it goes left -1.

Create a maxDistance function that takes the movements text string and returns **the maximum distance** the reindeer can travel **in any direction**:

```js
const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
```

Keep in mind that it doesn't matter if it is left or right, the distance is **the absolute value of the maximum distance traveled at the end of the movements**.
