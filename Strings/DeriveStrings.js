/*

Check if a given string can be derived from another string by circularly rotating it. The rotation can be in a clockwise or anti-clockwise rotation.

Input: X = "ABCD", Y = "DABC"
Output: true
Explanation: "DABC" can be derived from "ABCD" by right-rotating it by 1 unit

Input: s1 = "abcd", s2 = "cdab"
Output: true
Explanation: After 2 right rotations, s1 will become equal to s2.

Input: s1 = "aab", s2 = "aba"
Output: true
Explanation: After 1 left rotation, s1 will become equal to s2.

Input: s1 = "abcd", s2 = "acbd"
Output: false
Explanation: Strings are not rotations of each other.

*/


var getDerivetrings = function(s1, s2) {
	var indexOrder;
	var arrCompare = s2.toLowerCase().split("");

	for(var i = 0; i < s1.length; i++) {
		var char = s1[i].toLowerCase();
		if (!indexOrder) {
			var charIndexFounded = arrCompare.indexOf(char);
			
			if (charIndexFounded === -1) {
				return false;
			}
			indexOrder = charIndexFounded;
			continue;
		}

		var nextIndexOrder = indexOrder + 1 === s2.length ? 0 : indexOrder + 1;
		
		if (s2[nextIndexOrder] === char) {
			indexOrder++;
			continue;
		}
	}
	return true;
}

console.log(getDerivetrings("ABCD", "DABC") === true ? "Success" : "Failed")
console.log(getDerivetrings("abcd", "cdab") === true ? "Success" : "Failed")
console.log(getDerivetrings("aab", "aba") === true ? "Success" : "Failed")
console.log(getDerivetrings("abcd", "acbd") === true ? "Success" : "Failed")