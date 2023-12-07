## 📦 The 3D boxes

Santa is experimenting with new gift designs and **needs your help to visualize them in 3D**.

Your task is to write a function that, given a size n (integer), **generates a 3D drawing of a gift** using ASCII characters.

The lines of the gifts are drawn with `#` and the faces with the symbol that they pass to us as a parameter:

```js
drawGift(4, "+");

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, "*");
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, "^");
/*
#
*/
```

**Important:** We have been told that **you should always leave a line break at the end of the drawing**.

**Note:** Please note that in tests, the first line is pushed by the " character.
