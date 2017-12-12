// create a virthday countdown using a loop



for (var daysUntilMyBirthday = 60; daysUntilMyBirthday > 0; daysUntilMyBirthday --) 
{
    if (daysUntilMyBirthday > 30) {
        console.log("I have to wait", daysUntilMyBirthday, "until my birthday. That is soooooo long, ugh!");
    }
    else if (daysUntilMyBirthday <= 30 && daysUntilMyBirthday > 5) {
        console.log("It's getting closer to my Birthday-only", daysUntilMyBirthday, "days left! :)");
    }
    else {
        console.log("COUNT DOWN TO THE BIG DAY!!!!!!!!!!", daysUntilMyBirthday);
    }
}

console.log("HHHHAAAAAAAPPPPPPPPPPPPYYYYYY BIIIIIIIIIRRRRRTTTTHHHHDDDDDAAAAYYYYYY to me!");

