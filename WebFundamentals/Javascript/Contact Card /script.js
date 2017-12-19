'use strict';

$('document').ready(function(){

    $('form').submit(function(){
        var name = $('#fName').val() + " " + $('#lName').val();
        $('#cardArea').append("<div id='stuff'><p>"+name+"</p><p id='backSide'>" + $('#deScript').val()+ "</p></div>"); 
        return false; 
    })
    
     
    $(document).on("click", '#stuff', function(){
        $(this).children().toggle();
    })

     $(document).on("click", "#italic", function(){
        $('#cardArea div').css('font-style', "italic");
     })

     $(document).on("click", "#bold", function(){
        $('#cardArea div').css('font-weight', "bold");
     })
})

