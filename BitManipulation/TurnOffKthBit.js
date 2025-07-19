/*

Given an integer n and a positive number k, turn off k'th bit in n.

Input: n = 20, k = 3
Output: 16
Explanation:

20 in binary is 00010100
16 in binary is 00010000

Input: n = -20, k = 3
Output: -24
Explanation:

-20 in binary is 1111111111101100
-24 in binary is 1111111111101000

*/

class Solution {
  static turnOffKthBit(n, k) {
    // Write your code here...

    ///000001 = 1 << 0 = 1
    //000010 = 1 << 1 = 2
    //001000 = 1 << 2 = 4;

    //00100 = 4 >> 1 = 2; //00010
    //00100 = 4 >> 2 = 1; //00001

    //1
    //10
    //11
    //100

    //00000100
    //00010100

    //00010000

    if (((n >> (k - 1)) & 1) === 1) {
      return n ^ (1 << (k - 1));
    }

    return n;
  }
}

// Example usage
console.log(Solution.turnOffKthBit(20, 3));   // Output: 16
console.log(Solution.turnOffKthBit(-20, 3));  // Output: -24
console.log(Solution.turnOffKthBit(-80, 4)); // Output: 80



