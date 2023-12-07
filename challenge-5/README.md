## 🛷 Santa's Cybertruck

Santa 🎅 is testing his new electric sleigh, the _CyberReindeer_, on a road in the North Pole. The road is represented with a string of characters, where:

- `.` = Road
- `S` = Santa's Sleigh
- `*` = Open barrier
- `|` = Barrier closed

Road example: `S...|....|.....`

Each unit of time, **the sled advances one position to the right**. If it encounters a closed barrier, it stops until the barrier opens. If it is open, it goes straight through.

**All barriers start closed**, but after 5 time units, they all open **forever**.

**Create a function that simulates the movement of the sled** for a given time and **returns an array** of strings representing the state of the road in each unit of time:

```js
const road = 'S..|...|..'
const time = 10 // time units
const result = cyberReindeer(road, time)

-> result:
[
'S..|...|..', // initial state
'.S.|...|..', // the sleigh advances along the road
'..S|...|..', // the sled moves along the road
'..S|...|..', // the sled stops at the barrier
'..S|...|..', // the sled stops at the barrier
'...S...*..', // the barrier opens, the sled moves forward
'...*S..*..', // the sled moves along the road
'...*.S.*..', // the sled moves along the road
'...*..S*..', // the sled moves along the road
'...*...S..', // advance through the open barrier
]
```

The result is an **array where each element shows the road in each time unit**.

Note that **if the sled is in the same position as a barrier**, then it takes its place in the array.

The elves were **inspired by this Code Wars challenge**.
