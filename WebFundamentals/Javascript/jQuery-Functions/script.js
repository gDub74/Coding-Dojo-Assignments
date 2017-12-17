'use strict';

$(document).ready(function(){
    console.dir(document);

    $('#addClass button').click(function(){
        $('#addClass p').addClass('red');
    })

    $('#slideToggle button').click(function(){
        $('#slideToggle img').slideToggle('slow');
    })

    $('#append button').click(function(){
        $('#append').append('<p>This is a new paragraph.</p>');
    })

    $('#fadeIn button').click(function(){
        $('#fadeIn img').fadeIn('600');
    })

    $('#html button').click(function(){
        $('#html p').html('<h1> Look at that!</h1>');
    })

    $('#text button').click(function(){
        $('#text p').text('We just used jQuerry to add some text here - cool!');
    })
})