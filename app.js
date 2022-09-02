// Question 1

function returnFalsy (one, two){
    return (!one ? one : two)
}

console.log(returnFalsy(undefined, 500))

// Question 2

function arrLength (arr){
    return arr.length
}

console.log(arrLength([1, 2, 3, 4, 5]))

// Question 3

function lastElement (arr) {
    return arr [arr.length - 1]
}

console.log(lastElement([1, 2, 3, 62]))

// Question 4

function arrSum(arr){
    let sum = 0
    for (let i = 0; i < arr.length; ++i){
        sum = sum + arr[i]
    }
    return sum
}

console.log(arrSum([2, 2, 2]))

// Question 5

function progressiveSum(num){
    let total = 0
    for (let i = 0; i <= num; ++i){
        total = total + i
    }
    return total
}

console.log(progressiveSum(4))

// Question 6

function calcTime(time){
    let minutes = Math.floor (time / 60)
    let seconds = time % 60
    if (minutes.toString().length === 1){
        minutes = '0' + minutes
    }
    return minutes + ':' + seconds
}

console.log(calcTime(75))

// Question 7

function getMax(arr){
    let max = arr[0]
    for (let i = 0; i <= arr.length; ++i){
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

console.log(getMax([-12, 10, -20]))

// Question 8

function reverseString(str){
    let reversedString = ''
    for (let i = str.length - 1; i >= 0; --i){
        reversedString += str[i]
    }
    return reversedString
}

console.log(reverseString('shivom'))

// Question 9

function convertToZero(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = 0
    }
    return arr
}

console.log(convertToZero([1, 2, 3, 4, 5]))

// Question 10

function removeApples(arr){
    let noApples = []
    for (let i = 0; i < arr.length; ++i){
        if (arr[i] !== 'apples'){
            noApples.push(arr[i])
        }
    }
    return noApples
}

console.log(removeApples(['apples', 'banana', 'oranges']))

// Question 11

function filterOutFlasy(arr){
    let noFalsy = []
    for(let i = 0; i < arr.length; ++i){
        if(!!arr[i] === true){
            noFalsy.push(arr[i])
        }
    }
    return noFalsy
}

console.log(filterOutFlasy([0, null, undefined, 'apples', 'shivom']))


function convertToBool(arr){
    return arr.map(elem => !!elem) 
}

console.log(convertToBool([1000, 0, 'shiv', undefined]))