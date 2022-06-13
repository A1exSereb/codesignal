//Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a.
//abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)

function solution(a) {
    let obj = {
        min: Number.POSITIVE_INFINITY,
        number: null,
    };
    for(let i in a) {
        let res = 0;
        for(let j in a){
          res += Math.abs(j - i)
        }
        if(res<obj.min) {
            obj.min = res;
            obj.number = a[i]
        }
    }
    return obj.number;
}