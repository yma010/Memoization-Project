// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function (amount, coins) {
  let arr = [];

  for (let i = 0; i < amount + 2; i++) {
    arr[i] = 0
  };

  arr[0] = 1;

  coins.forEach((el) => {
    for (let i = el; i <= amount; i++) {
      arr[i] += arr[i - el];
    }
  });

  return arr[amount];
};