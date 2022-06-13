function solution (image) {
    let res = [];
    for (let x = 0; x < image.length -2; x++){
        let xmatrx = [];
        for(let y =0;y < image[x].length -2; y++){
            let top = image[x][y] + image[x][y+1] + image[x][y+2]
            let middle = image[x+1][y] + image[x+1][y+1] + image[x+1][y+2]
            let bott = image[x+2][y] + image[x+2][y+1] + image[x+2][y+2]
            let sum = Math.floor((top + middle + bott) / 9)
            xmatrx =[...xmatrx,sum]
        }
        res = [...res,xmatrx]  
    }
    return res;
}