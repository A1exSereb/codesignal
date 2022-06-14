//can be optimized 
const solution = (s) => s.split('').filter((el,i,arr) => i === arr.lastIndexOf(el)).length
//we can just remove split and get count of uniq chars with loop and lastIndex
const solution2 = (s) => {
    let counter = 0;
    for(let i = 0, len = s.length; i < len;i++){
        if(i === s.lastIndexOf(s[i])) counter++
    }
    return counter;
}
// oh, i remember that we have set, so...
const solution3 = (s) => new Set(s).size