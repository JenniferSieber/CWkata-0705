// KATA 1
//  https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

function largestPairSum (numbers) {
  let arr = numbers.sort((a,b) => b - a)
  return arr[0] + arr[1]
}

console.log(largestPairSum([-100,-29,-24,-19,19]))
//console.log(largestPairSum([10,14,2,23,19]))

// KATA 2 
// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

function checkExam(array1, array2) {
  //loop both arrays comparing i to j if correct send +4 to score
  //if no match - 1 from score.
  let result = array2.reduce(
    (score, answer, i) => {
      if (answer == array1[i]) return score += 4;
      else if (answer == 0) return score += 0;
      else return score - 1;
    }, 0);
    return result < 0 ? 0 : result;
 }

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))

// KATA 3
//  https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  const mult = 
    [...arguments].map(val => val * val)
    .reduce((ttl, ac) => ttl + ac, 0);
    
  return Math.floor(Math.sqrt(mult,2) / 2);
}

console.log(predictAge(65,60,75,55,60,63,64,45))

// KATA 4
// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript
console.log('alph')
function alphabetWar(fight) {
  let score = 0;
  for (const char of fight) {
    switch (char) {
      case 'w' : score -= 4; break;
      case 'p': score -= 3; break;
      case 'b': score -= 2; break;
      case 's': score -= 1; break;
      case 'm': score += 4; break;
      case 'q': score += 3; break;
      case 'd': score += 2; break;
      case 'z': score += 1; break;
    }
  }
  return score < 0 ? 'Left side wins!' : score > 0 ? 'Right side wins!' : `Let's fight again!`;
}

console.log(alphabetWar('z')) 
console.log(alphabetWar('zzzzs')) 
console.log(alphabetWar('zdqmwpbs')) 

// KATA 5
// https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript
function vowelIndices(word){
  //your code here
  let arr = []
  for (let i = 0; i < word.length; i++) {
    if (/[aeioyu]/i.test(word[i])) {
      arr.push(i + 1);
    } 
  }
  return arr;
}

console.log(vowelIndices('mmm'))
console.log(vowelIndices('apple'))
console.log(vowelIndices('super'))


// KATA 6 
//  https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript
function findLongest(array){
  return array.reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);
}

console.log(findLongest([1, 10, 100]))
console.log(findLongest([9000, 8, 800]))

