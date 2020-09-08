/**
PART A: CODE
*/

const enqueue = (queue, item) => {
	return queue.concat([item]);
};
const dequeue = (queue) => {
	return queue.splice(1, queue.length - 1);
};
const checkAllOrangesRotten = (grid) => {
	for (var i in grid) {
		for (var j in grid[i]) {
			if (grid[i][j] === 1) {
				return false;
			}
		}
	}
	return true;
};
const isDelimiter = (item) => {
	return item.row === -1 && item.col === -1;
};
const isValidOrange = (grid, row, col) => {
	if (row < 0 || row >= grid.length) { return false; }
	if (col < 0 || col >= grid.length) { return false; }
	return grid[row][col] === 1;
};

/**
* @param {number[][]} grid
* @return {number}
*/
const orangesRotting = (grid) => {
	var time = 0;
	var queue = [];
	for (var i in grid) {
		for (var j in grid[i]) {
			if (grid[i][j] === 2) {
				queue = enqueue(queue, { row: parseInt(i), col: parseInt(j) });
			}
		}
	}
	queue = enqueue(queue, { row: -1, col: -1 });
	while (queue.length > 0) {
		var flag = false;
		var front = queue[0];
		while (!isDelimiter(front)) {
			const row = front.row;
			const col = front.col;
			// Top
			if (isValidOrange(grid, row - 1, col)) {
				grid[row - 1][col] = 2;
				flag = true;
				queue = enqueue(queue, { row: row - 1, col: col });
			}
			// Down
			if (isValidOrange(grid, row + 1, col)) {
				grid[row + 1][col] = 2;
				flag = true;
				queue = enqueue(queue, { row: row + 1, col: col });
			}
			// Left
			if (isValidOrange(grid, row, col - 1)) {
				grid[row][col - 1] = 2;
				flag = true;
				queue = enqueue(queue, { row: row, col: col - 1 });
			}
			// Right
			if (isValidOrange(grid, row, col + 1)) {
				grid[row][col + 1] = 2;
				flag = true;
				queue = enqueue(queue, { row: row, col: col + 1 });
			}
			queue = dequeue(queue);
			front = queue[0];
		}
		queue = dequeue(queue);
		if (queue.length > 0) {
			queue = enqueue(queue, { row: -1, col: -1 });
		}
		if (flag) { time = time + 2; }
	}
	return checkAllOrangesRotten(grid) ? time : -1;
};

/**
PART B: TEST
*/

const tests = [
	[[1, 1, 1], [1, 1, 0], [0, 2, 1]],
	[[1, 0, 1], [0, 1, 1], [1, 1, 2]],
	[[1, 0, 1], [0, 1, 1], [1, 1, 0]],
	[[2, 0, 2], [0, 2, 2], [2, 2, 2]],
	[[1, 2, 1], [0, 1, 1], [1, 1, 2]],
	[[0, 1, 0], [0, 2, 1], [0, 1, 2]]
];
console.log('PROBLEM 2: TEST CASES');
tests.map((test, i) => {
	console.log('INPUT ' + (i + 1) + ': ', test);
	console.log('OUTPUT ' + (i + 1) + ': ', orangesRotting(test));
});

/**
PART C: EXPLANATION
*/

/**

The idea here is to use a queue data structure to store items which will spread rot, after that we iterate through the queue to spread rot
to adjacent items. If any of adjacent items will be rotten, it is enqueued for the next spread. The delimiter is to separate the timeframe of
2 seconds for each spread. The flag is to indicate whether this spread has any enqueued item, if flag = true, the time answer is incremented.
Each spread ends when the queue's front item is delimiter, and the whole process ends when the queue is empty (excluding delimiter). It is impossible
to rot the whole grid if there is still white item after the whole process. Assuming the grid has 2 dimensions of n*n

Time complexity: O(n^2) - Iterating through the whole grid to enqueue all items

Space complexity: O(n^2) - Space of storing all items into queue

*/