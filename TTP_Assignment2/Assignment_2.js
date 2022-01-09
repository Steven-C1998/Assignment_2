
function myEach(array, callBack) {
    if (typeof (array) !== "object") {
        console.log("not an object")
    } else if (typeof callBack !== "function") {
        console.log("need a callback function")
    } else {
        for (let i = 0; i < array.length; i++) {
            callBack(array[i])
        }
    }
}

//let test = "test"
//myEach(test, print)

function myMap(array, callBack) {
    if (typeof (array) !== "object") {
        throw new TypeError
    } else if (typeof callBack !== "function") {
        throw new TypeError
    } else {
        let arr = []
        for (let i = 0; i < array.length; i++) {
            arr.push(callBack(array[i]))
        }
        return arr
    }
}

//console.log(myMap(x, print))

function myFilter(array, callBack) {
    if (typeof (array) !== "object") {
        throw new TypeError
    } else if (typeof callBack !== "function") {
        throw new TypeError
    } else {
        let arrFilter = []
        for (let i = 0; i < array.length; i++) {
            if (callBack(array[i])) {
                arrFilter.push(array[i])
            }
        }
        return arrFilter
    }
}

//console.log(myFilter(x, print))

function mySome(array, callBack) {
    if (typeof (array) !== "object") {
        throw new TypeError
    } else if (typeof callBack !== "function") {
        throw new TypeError
    } else {
        let arrBool
        for (let i = 0; i < array.length; i++) {
            if ((callBack(array[i]))) {
                arrBool = true
            }
        }
        return arrBool
    }
}

//console.log(mySome(x, print))

function myEvery(array, callBack) {
    if (typeof (array) !== "object") {
        throw new TypeError
    } else if (typeof callBack !== "function") {
        throw new TypeError
    } else {
        let arrBool
        for (let i = 0; i < array.length; i++) {
            if (!(callBack(array[i]))) {
                return false
            }
        }
        return arrBool
    }
}

//console.log(myEvery(x, print))



function print(x) {
    return x - 1;
}

//reduce me to what...
function myReduce(array, callBack) {
    if (typeof (array) !== "object") {
        throw new TypeError
    } else if (typeof callBack !== "function") {
        throw new TypeError
    } else {
        let total = 0
        for (let i = 0; i < array.length; i++) {
            total = callBack(array[i])
        }
        return total;
    }
}

//console.log(myReduce(x, print))

function printTest(total, x) {
    return x - 1;
}

//console.log(x.reduce(printTest))

function includeTest(x) {
    return x === 1
}

function myIncludes(array, callBack) {
    if (typeof (array) !== "object") {
        throw new TypeError("not an object")
    } else if (typeof callBack !== "function") {
        throw new TypeError("not an function")
    } else {
        let arrBool
        for (let i = 0; i < array.length; i++) {
            if ((callBack(array[i]))) {
                arrBool = true
            }
        }
        return arrBool
    }
}
//console.log(x.includes(1))
//console.log(myIncludes(x, includeTest))

function myIndexOf(array, callBack) {
    if (typeof (array) !== "object") {
        throw new TypeError("not an object")
    } else if (typeof callBack !== "function") {
        throw new TypeError("not an function")
    } else {
        for (let i = 0; i < array.length; i++) {
            if ((callBack(array[i]))) {
                return i
            } else {
                return -1
            }
        }
    }
}
//console.log(myIndexOf(x, includeTest))

function myPush(array, callBack) {
    if (typeof (array) !== "object") {
        throw new TypeError("not an object")
    } else if (typeof callBack !== "function") {
        throw new TypeError("not an function")
    } else {
        for (let i = 0; i < array.length; i++) {
            if ((callBack(array[i]))) {
                return [...array, callBack()]
            }
        }
    }
}

//test callback function
function pushTest() {
    return 1
}

//test callback function
function includeTest(x) {
    return x === 4
}

//test array
let x = [1, 2, 3, 4, 4, 5, 6]
//console.log(myPush(x, pushTest))

function myUnshift(array, callBack) {
    if (typeof (array) !== "object") {
        throw new TypeError("not an object")
    } else if (typeof callBack !== "function") {
        throw new TypeError("not an function")
    } else {
        let index = -1;
        for (let i = 0; i < array.length; i++) {
            if ((callBack(array[i]))) {
                index = i
            } 
        }
        return index;
    }
}

//console.log(myUnshift(x, includeTest))

function grabKeys (array){
    if (typeof (array) !== "object") {
        throw new TypeError("not an object")
    } else {
        let keysArray = []
        for(let i in array){
            keysArray.push(i)
        }
        return keysArray
    }
}
//test obj
let obj = {
    str: 1,
    str1: 2
}

//console.log(grabKeys(obj))

function grabValues (array){
    if (typeof (array) !== "object") {
        throw new TypeError("not an object")
    } else {
        let keysArray = []
        for(let i in array){
            keysArray.push(array[i])
        }
        return keysArray
    }
}

//console.log(grabValues(obj))