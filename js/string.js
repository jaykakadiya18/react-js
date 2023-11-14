const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);

// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);


const arr = [1,2,3,4,5,6]

const arr2 = ["jay", "kebin", "raj"]

arr.push(7)
arr.pop()

arr.unshift(0)
arr.shift()
console.log(arr.join(''));

// slice, splice

const lst = [1,2,3,4,5,6]

console.log(lst.slice(1,3));

console.log(lst.splice(1,3));
console.log(lst);

console.log([...arr,...arr2])

const ajib_arr = [1,2,3,[2,3,4],4,5,[1,2,[3,4,[6,7]]]]

const another_arr = ajib_arr.flat(Infinity)

console.log(another_arr);

console.log(Array.isArray(arr));
console.log(Array.from("kakadiya"));

console.log(Array.from({name : "kakadiya"})); //intresting

let num = 1
let num2 = 2
let num3 = 3

console.log(Array.of(num,num2,num3));

