//create a function that can take a startr point, an end point(should go up to but not include), and a skip amount (2 would print every other number, 3 would print every 3rd...)

function printRange(start,end,skip){
    if (end == undefined && skip == undefined){
        end = start;
        start = 0;
        skip = 1;
    }
    
    else if (skip == undefined || skip == 0){
        skip = 1;
    }

    for (var i = start ; i < end; i+=skip) {
        console.log(i);
    }
}

console.log("here is an example starting on a negative number:");
printRange(-4,28,3);
console.log("here is an example where no skip value is given therefore skip defaults to 1");
printRange(10,19);
console.log("here is an example where no only one parameter is passed so that value is set to end, start is set 0 and skip is set to 1");
printRange(11);