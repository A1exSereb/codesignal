function solution(inputArray, k) {
    let result = Number.NEGATIVE_INFINITY, leng = inputArray.length;
    for(let i = 0; i < (leng - k) + 1; i++){
        let sum = inputArray[i]
        for(let j = 1; j < k; j++){
            sum += inputArray[i+j]
        }
        result = Math.max(sum,result)
    }
    return result;
  }