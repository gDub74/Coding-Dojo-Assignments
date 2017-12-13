// write a function to print out the values of an array adding the characters ->, and printing the index value of their position in the arra

function fancifier(symbols) {
    var arrFancy = [ "James", "Jill", "Jane", "Jack" ]
    for (var i = 0; i < arrFancy.length; i++){
        console.log(i, symbols , arrFancy[i]);
    }
}

fancifier('---->>>>')
fancifier('><><><><><><><><')
fancifier('O<<O<O<>O>O>O>')
fancifier('><>--<><>--<')
fancifier('>----------<')
fancifier('<<<<--->>>>---<<<--->>>')