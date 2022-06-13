//Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).
//Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

function solution(n, firstNumber) {
    let arr = Array.from(Array(n).keys()), position = n/2;
    arr.push(arr.shift(0))
    for(let i = firstNumber - 1; i < arr.length; i++, position-- ) {
        if(position === 0) return arr[i]
        if(i === arr.length - 1) i = -1
    }
 }