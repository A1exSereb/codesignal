const arr = [1,50,200,222,223,678,900,1000]

const bSearch = (arr,e) => {
    let min = 0, max = arr.length, mid = (min + max)/2
    do{
        if(e > arr[mid]) {
            max = mid
            mid = min+max/2};
        if(e < arr[mid]) {
            min = mid
            mid = min+max/2
        };
        if(e === arr[mid]) return mid;
    }
    while(e !== arr[mid])
}

console.log(bSearch(arr,678))