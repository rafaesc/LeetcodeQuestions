/*
You are given a set of university courses and their prerequisite relationships.
Each course is labeled with an integer from 1 to n.

Some courses must be taken before others: if course a is a prerequisite of course b, then you must finish a in a semester strictly before you can take b.

In one semester, you can take any number of courses as long as all of their prerequisites were completed in previous semesters.

A prerequisite chain is a sequence of distinct courses where each course is a prerequisite of the next one in the sequence.

Your task is to compute the minimum number of semesters needed to complete the longest chain of prerequisites. Each course in that prerequisite chain must be taken in a different semester, starting from its first prerequisite.

Function Signature

int minNumberOfSemesters(int n, int[][] prerequisites);

n — the total number of courses, labeled from 1 to n.
prerequisites{i} = {a, b} — to take course b, you must first complete course a.

Input

n = 4
prerequisites = [[1, 2], [2, 3], [3, 4], [1, 4], [3, 5]]

Output: 4

Example 2

n = 4
prerequisites = {}

Output: 1

Example 3

n = 6
prerequisites = [[1, 2], [2, 3], [1, 4], [4, 5], [5, 6]]

Output: 4

Constraints

1 <= n <= 10^5
0 <= prerequisites.length <= 10^5
All course IDs are in the range {1, n}.
*/

function minNumberOfSemesters(n, prerequisites) {
	var courseByRequired = {}
	var coursesSet = new Set();
	var order = [];
	var positionByCourse = {}
	var maxPositionByCourse = {};


	for (var i = 0; i < prerequisites.length; i++) {
		var course = prerequisites[i][1];
		var required = prerequisites[i][0];

		if (!courseByRequired[course]) {
			courseByRequired[course] = []
		}
		courseByRequired[course].push(required)
		coursesSet.add(course)
	}

	var count = 0;
	
	var max = 0;

	while (Object.keys(courseByRequired).length > 0 && max < 6) {
		count++;
		max++
		
		var courses = Object.keys(courseByRequired);
		var firstPosition = new Set();
		for (var i = 0; i < courses.length; i++) {
	
			var course = Number(courses[i]);
			var listRequired = courseByRequired[course];
	
			var j = 0;
			while (listRequired.length > j) {
				var req = listRequired[j];
	
				if (firstPosition.has(req)) {
					j++;
					continue;
				}
	
				if (!coursesSet.has(req)) {
	
					firstPosition.add(req)
					listRequired.splice(j, 1);
					continue;
				}
				j++;
			}
			
		}
		var i = 0;
		while (Object.keys(courseByRequired).length > i) {
			var course = Number(Object.keys(courseByRequired)[i]);
			if (courseByRequired[course].length === 0) {
				delete courseByRequired[course]
				coursesSet.delete(course)
				continue
			}
			i++
			
		}		
	}
	
	return count
}


console.log(minNumberOfSemesters(0, [[1, 2],[99, 2], [2, 3], [3, 4], [1, 4], [3, 5]]) === 4)
console.log(minNumberOfSemesters(0, [[1, 2], [2, 3], [1, 4], [4, 5], [5, 6]]) === 4)
console.log(minNumberOfSemesters(0, []) === 0)
