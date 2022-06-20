const arr1 = [1,2,3,4,1,2]
const arr2 = [1,2,3,4,5,6]
const sol = (a) =>{
    let o = new Set();
    for(el of a){
        if(o.has(el)) return el
        else o.add(el)
    }
    return -1
}