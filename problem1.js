/**
PART A: CODE
*/

/**
* @param {number[]} nums
* @return {number}
*/
const singleNumber = (nums) => {
	var count_object = Object.assign({});
	for (var num of nums) {
		count_object[num] = count_object[num] ? count_object[num] + 1 : 1;
	}
	for (var num of Object.keys(count_object)) {
		if (count_object[num] === 1) { return parseInt(num); }
	}
};

/**
PART B: TEST
*/

const tests = [
	[1, 1, 0, 1, 1, 1],
	[3, 1, 3, 1, 1, 3, 3, 5, 1, 3, 1],
	[5],
	[4, 3, 1, 3, 2, 0, 1, 4, 1, 2, 3, 4, 3, 2, 1, 3, 1, 2, 4, 4, 2],
	[5, 3, 1, 3, 1, 1, 3, 3, 1, 3, 1],
	[3, 1, 3, 1, 1, 3, 3, 1, 3, 1, 5]
];
console.log('PROBLEM 1: TEST CASES');
tests.map((test, i) => {
	console.log('INPUT ' + (i + 1) + ': ', test);
	console.log('OUTPUT ' + (i + 1) + ': ', singleNumber(test));
});

/**
PART C: EXPLANATION
*/

/**

Assuming the input is always true (containing distinct items with frequency = 5 and only one with frequency = 1), then if the input has length = N,
we use a key-value object A to store each distinct item and their respective frequencies, so basically this object A has length = 1+(N-1)/5.
We iterate through the input once to compute object A, then iterate through keys of object A to determine the output

Time complexity: N + 1 + (N-1)/5 ~ O(n)

Space complexity: S(P) ~ O(n)

*/