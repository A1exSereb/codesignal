const solution = (inputArray, k) => inputArray.filter((el,i,arr) => {
    if((i+1)%k !== 0) {
        return `${el}`}
})