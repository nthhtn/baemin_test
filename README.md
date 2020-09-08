# BAEMIN TEST

### Technology

***

* Node.js

### Problem 1

***

* Run tests:

```
node problem1.js
```

* Explanation:

Assuming the input is always true (containing distinct items with frequency = 5 and only one with frequency = 1), then if the input has length = N,
we use a key-value object A to store each distinct item and their respective frequencies, so basically this object A has length = 1+(N-1)/5.
We iterate through the input once to compute object A, then iterate through keys of object A to determine the output

Time complexity: N + 1 + (N-1)/5 ~ `O(n)`

Space complexity:  `O(n)`

### Problem 2

***

* Run tests:

```
node problem2.js
```

* Explanation:

The idea here is to use a queue data structure to store items which will spread rot, after that we iterate through the queue to spread rot
to adjacent items. If any of adjacent items will be rotten, it is enqueued for the next spread. The delimiter is to separate the timeframe of
2 seconds for each spread. The flag is to indicate whether this spread has any enqueued item, if flag = true, the time answer is incremented.
Each spread ends when the queue's front item is delimiter, and the whole process ends when the queue is empty (excluding delimiter). It is impossible
to rot the whole grid if there is still white item after the whole process. Assuming the grid has 2 dimensions of n*n

Time complexity: `O(n^2)` - Iterating through the whole grid to enqueue all items

Space complexity: `O(n^2)` - Space of storing all items into queue

### Contributor

***

Nguyen The Hien <thehien115@gmail.com>
