var numbers = [12, 10, 15, 11, 14, 13, 16];

const arrEl = document.getElementById("array");
arrEl.innerHTML += JSON.stringify(numbers);
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");

function findNumber(num, arr) {
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === num) {
      console.log(`Yes, ${num} is found at index: ${i}`);
      ans1.innerHTML += `Yes, ${num} is found at index: ${i}`;
      return true;
    }
  }
  console.log(`No, ${num} is not found at any index!`);
  ans2.innerHTML += `No, ${num} is not found at any index!`;
  return false;
}

console.log(`Array is ${JSON.stringify(numbers)}`);
const a = findNumber(15, numbers);
const b = findNumber(100, numbers);
console.log(a);
console.log(b);

/*

<<  Linear Search  >>

Pseodocode:

For i from 0 to n-1
  If i'th element is 11
    Return true
Return false

Runnging time:

Worst case scenario: O(n)
In the worst case, will have to look all of the elements

Best case scenario: Omega(1)
In the best case, it could have been the first elem that we are looking
*/
