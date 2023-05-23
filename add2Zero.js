let array1 = [1, 4, 11, 2, 37, -4]
let array2 = [0, 21, 33, 6, 0, -9]
let array3 = [0, 1, 2, 3, 4, 5]
let result = false

function checkArray (arr){
    for (let i = 0; i < arr.length; i++){
        for (let k = i + 1; k < arr.length; k++){
            if (arr[i] + arr[k] === 0){
                return true
            }
            }
        }
    return false
}


console.log(checkArray(array1))
console.log(checkArray(array2))
console.log(checkArray(array3))