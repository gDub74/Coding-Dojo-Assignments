'use strict';

$('document').ready(function(){
    
   
    
        $('form').submit(function(){
           //grab ingor from a form submit and put into an array
            var newRow = [$('#first_name').val(), $('#last_name').val(), $('#email').val(), $('#phone').val()];
            //cycle through array and place elements into their own <td> in a <tr> in a <tbody> in a <table>
            for (var i = 0; i<newRow.length; i++){
                $('tbody tr').append('<td>' + newRow[i] + '</td>');

            }


            // replace the placeholders in the form.

            // $('#first_name').attr('placeholder', 'First Name');
            // $('#last_name').attr('placeholder', 'Last Name');
            // $('#email').attr('placeholder', 'Email');
            // $('#phone').attr('placeholder', 'Phone #');

            return false; 
           
        })
 


})