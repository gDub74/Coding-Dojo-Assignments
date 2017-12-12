var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

// var HOUR = 7;
// var MINUTE = 15;
// var PERIOD = "PM";



if (MINUTE > 30) 
{
    if (PERIOD == "AM") {
        HOUR +=1;
        console.log("It's almost", HOUR, "in the morning"); 
    }
    else {
        HOUR +=1;
        console.log("It's almost", HOUR, "in the evening");
    }
}
else if (PERIOD == "AM"){
        console.log("It's just after", HOUR, "in the morning");
    }
    else {
        console.log("It's just after", HOUR, "in the evening");
    }



