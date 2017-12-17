'use strict';

$('document').ready(function(){

    $('img').click(function(){ 
        $(this).hide(600);
    })

    $('button').click(function(){
        $('img').show();
    })

})