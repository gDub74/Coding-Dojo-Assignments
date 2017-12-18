'use strict';

$('document').ready(function(){

    $('img').click(function(){
        $(this).attr('temp', $(this).attr('src'));  //sets an empty temp attribute to the value of the src attribute
        $(this).attr('src', $(this).attr('data-alt-src')); //sets the src to the alt-src
        $(this).attr('data-alt-src', $(this).attr('temp')); //resets the alt-src to what the src was originally
    })
})