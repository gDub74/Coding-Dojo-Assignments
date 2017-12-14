//make a function that copys an array only accepting values that are numbers - it should return a new array.
//example: var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
// newArray is [1, -3, 0.5]


function numsOnly() {
    var arr = [1, 'apple', -3, 'orange', 0.5];
    var newArr = [];
    for (var i= 0; i < arr.length; i++){
        if (typeof arr[i] === 'number'){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

numsOnly();


