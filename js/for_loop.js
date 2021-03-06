// for_loop.js

// 배열관련 반복되는 메소드.
// forEach: void, map: [배열] A -> A', filter: [배열] A -> B, reduce: 문자열, Number, [배열], {}

let ary = [3, 5, 8, 9, 12]; // 배열객체: new Array();
ary.push(5); // pop();
ary.unshift(7); // shift();
// 7, 3, 5, 8, 9, 12, 5
ary.splice(3, 1); // 7, 3, 5, 9, 12, 5

let newAry = [];
// 1.forEach
let result = ary.forEach(firstCallBack);

function firstCallBack(elem) {
    // console.log(elem);
    newAry.push(elem);
}

// 2.map
result = ary.map(elem => elem * 2); // A -> A'(A * 2) 
console.log(newAry);

// 3.filter A -> a
result = ary.filter((elm, ind) => ind > 3); //

// 4.reduce A -> 문자열, Number, [], {}
result = ary.reduce((accum, curr, currIdx, arry) => {
    console.log(accum, curr, currIdx);
    return accum + curr;
}, 0);

result = ary.reduce((accum, curr) => {
    console.log(accum, curr);
    accum.push(curr * 2);
    return accum;
}, []); // 2.map 같은 기능.

result = ary.reduce((accum, curr, currIdx) => {
    if (currIdx > 3) {
        accum.push(curr * 2);
    }
    return accum;
}, []); // filter, map
console.log(result);