let arr = [3, 5, 2, 6, 7, 9, 3, 3, 22, 3, 25]



console.log(Math.max(...arr))
25

function findPeak(arr) {
    const peakNum = 0
    for (let i = 0; i < arr.length; i++) {
        arr[i] > peakNum ? peakNum = arr[i] : peakNum
    }
    return peakNum    
}

findPeak(arr)
function findPeak(arr) {
    let peakNum = 0
    for (let i = 0; i < arr.length; i++) {
        arr[i] > peakNum ? peakNum = arr[i] : peakNum
    }
    return peakNum    
}

findPeak(arr)
25
console.log(arr.sort((a, b) => a - b).pop())
25
undefined
function findPeak(arr) {
    let peakNum = 0
    for (let i = 0; i < arr.length; i++) {
        arr[i] > peakNum ? peakNum = arr[i] : peakNum
    return peakNum  
    } 
}

findPeak(arr)
2

function findPeak(arr) {
    let peakNum = 0
    for (let i = 0; i < arr.length; i++) {
        arr[i] > peakNum ? peakNum = arr[i] : peakNum
    }     return peakNum 
}

function findPeak(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i-1] && arr[i] < arr[i+1]) {
                return arr[i]
            }
    }     
}

findPeak(arr)
5
let arr = [1, 2, 3, 4, 5, 6, 5, 3, 1]

findPeak(arr)
5
function findPeak(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
                return arr[i]
            }
    }     
}

findPeak(arr)

function findPeak(arr) {
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] > arr[i-1]) && (arr[i] > arr[i+1])) {
                return arr[i]
            }
    }     
}

function findPeak(arr) {
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] > arr[i-1]) && (arr[i] > arr[i+1])) {
                return arr[i]
            }
    }     
}



function findPeak(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leftElement = arr[i-1]
        let rightElement = arr[i+1]
        if (leftElement < arr[i-1] && arr[i] > rightElement) {
                return arr[i]
            }
    }     
}

findPeak(arr)

function findPeak(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leftElement = arr[i-1]
        let rightElement = arr[i+1]
        let leftElementSmaller = leftElement < arr[i]
        let rightElementSmaller = rightElement < arr[i]
        if (leftElementSmaller && rightElementSmaller) {
                return arr[i]
            }
    }     
}

arr = [1, 2, 3, 4, 3, 2, 1]
(7) [1, 2, 3, 4, 3, 2, 1]
findPeak(arr)
4
function findPeak(arr) {
    for (let i = 0; i < arr.length; i++) {
//         let leftElement = arr[i-1]
        let rightElement = arr[i+1]
//         let leftElementSmaller = leftElement < arr[i]
        let rightElementSmaller = rightElement ? rightElement < arr[i] : true
        if (leftElementSmaller && rightElementSmaller) {
                return arr[i]
            }
    }     
}

peakArr(arr)


function findPeak(arr) {
    for (let i = 0; i < arr.length; i++) {
//         let leftElement = arr[i-1]
        let rightElement = arr[i+1]
//         let leftElementSmaller = leftElement < arr[i]
        let rightElementSmaller = rightElement ? rightElement < arr[i] : true
        if (rightElementSmaller) {
                return arr[i]
            }
    }     
}