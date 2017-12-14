//make a function that copys an array only accepting values that are numbers - it should return a new array.
//example: var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
// newArray is [1, -3, 0.5]


function numsOnly(arr){
    var newArr = [];
    for (var i= 0; i < arr.length; i++){
        if (typeof arr[i] === 'number'){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
    return(newArr);
}

numsOnly([1, 'apple', -3, 'orange', 0.5]);


//now a function that pulls the numbers out of an array without making a new one

function numPuller(arr) {
    for (var i = 0; i<arr.length; i++){ //runs through array
        while (typeof arr[i] === 'number') { //checks to see if value in index is a number, but we are going to over write that value and we don't know how long so use a while loop.
            for(var j= i; j< arr.length; j++){ //a loop that will ron through the array and overwrite current position with that of the index to the right. This loop will mover all values 1 to right and you end up with the same value in the last two positions of the array, then you can pop that last one out. Remember this loop only runs if the parent while loop detected a 'number' type in the index it is checking.
            arr[j] = arr[j+1];
            }
            arr.pop(); // now that we have moved all values to left 1 position in the array we no longer have that number in the position we started with in the while loop and we can pop the last value because it was rewritten in the second to last position - remember that number was in the position to the right of all the values we just moved.
        }      
    }
    console.log(arr);
}
numPuller([19, 'Hi', -2, 'how are', 199, 'you?']);

