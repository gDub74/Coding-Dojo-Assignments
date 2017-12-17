'use strict';

$('document').ready(function(){

    $('img').click(function(){
        console.log($(this).attr('src'));
        $(this).attr('src', $(this).attr('data-alt-src'));
        console.log('now', $(this).attr('src'));
    })
})