// v1

function solution(matrix) {
    let res = [];
    console.log('res', res)
    for(let x = 0; x < matrix.length ;x++){
        let row = [];
        for(let y = 0; y < matrix[x].length; y++) {
            let counter = 0;
                //self
                // if(matrix[x][y] === true) counter++     //if self mine give +1 
                //top - bott
                if(x !== 0 && matrix[x-1][y]) counter++
                if(x !== matrix.length-1 && matrix[x+1][y]) counter++
                //right - left
                if(y!==0 && matrix[x][y-1]) counter++
                if(y < matrix[x].length && matrix[x][y+1]) counter++
                //across
                if(x -1 !== -1 && y-1 !== -1 && matrix[x-1][y-1]) counter++
                if(x +1 < matrix.length  && y-1 !== -1 && matrix[x+1][y-1]) counter++
                if(x - 1 !== -1 && y+1 < matrix[x].length && matrix[x-1][y+1]) counter++
                if(x + 1 < matrix.length && y+1 < matrix[x].length && matrix[x+1][y+1]) counter++
                row=[...row,counter]  
            }
            res = [...res,row]
        }
        console.log(res)
    return res
    }

solution([[true,false,false], 
    [false,true,false], 
    [false,false,false]])

//v2