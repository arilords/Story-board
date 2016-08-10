/*-----------------------
    Initial Variables
------------------------*/

// Establish a counter
var counter = 0;

// Simplify html element selectors
var speech1 = $('#first-person-speech');
var speech2 = $('#second-person-speech');

var head1 =  $('#first-person > .head');
var head2 =  $('#second-person > .head');




/*-------------------------
      Event Handlers
--------------------------*/
// When a speech is too long...
// Need to create this function



// When refresh is clicked...
$('#refresh-btn').click( function() {

    // Ensure counter is 0
    counter = 0;
    console.log(counter);

    // Empty divs
    speech1.html("");
    speech2.html("");

    // Disappear speech divs
    speech1.attr('style', 'display: none');
    speech2.attr('style', 'display: none');

    // Log that refresh has successfully ran
    console.log('program reset');
});


// When continue is clicked...
$('#continue-btn').click( function() {

    // Log current counter number
    var counter_from_one =  counter + 1
    console.log('Clicks on continue since beginning: ' + counter_from_one );

    // Increment counter variable
    counter = counter + 1;

    // Run dialog function
    runDialog();
});


/*------------------------
        Functions
------------------------*/

function runDialog() {

    // Simpler variable to access dialog array
    var d = dialog[counter-1];
    console.log('What d equals : ' + d);

    // Check if the item includes an input tag
    if (d.search('input') != -1) {
        inputToText();
    }
    else {

          // Test evenness or oddness of counter, 0 means even, 1 means odd
          var even_or_odd = counter % 2;

          // Which speech div should appear
          if (even_or_odd === 1) {
              speech1.html( d );
              speech1.attr('style', 'display: inline-block');
              console.log( 'Person 1 : ' + speech1.text() );

              speech2.attr( 'style', 'display: none');

              head1.attr('style', 'box-shadow: 0 0 40px white');
              head2.attr('style', 'box-shadow: none');
          }
          else if (even_or_odd === 0) {
              speech2.html( d );
              speech2.attr( 'style', 'display: inline-block');
              console.log( 'Person 2 : ' + speech2.text() );

              speech1.attr('style', 'display: none');

              head1.attr('style', 'box-shadow: none');
              head2.attr('style', 'box-shadow: 0 0 40px white');
          }
          else {
              alert("error");
          } // End of if else statement

      } // End of initial else statement
    } //End of run dialog function


 // Convert user inputs to text for speech boxes
 function inputToText() {
     var d = dialog[counter-1];
     console.log('input to text initiated');

     // Styling
     speech2.attr( 'style', 'display: inline-block');
     speech1.attr('style', 'display: none');

     head2.attr('style', 'box-shadow: 0 0 40px white');
     head1.attr('style', 'box-shadow: none');

    // Dynamically created elements
    var $button = document.createElement('button');
        $button.className = 'input-btn';
        $button.innerHTML = 'submit';
    var $input = document.createElement('input');
        $input.className = 'input-box';

    //  Add dynamic input and button
    speech2.append($input);
    speech2.append($button);

     // When the dynamically created button is clicked...
     $(document).on('click', '.input-btn', function() {

         console.log('input btn was clicked');
         // Variable for speech input
         var user_input = $('.input-box').val();

         // Log the user's input
         console.log('User Input: ' + user_input);

        //  FIX: Trying to remove the input + button before recreation leads to a jquery error
         // Remove input and button
         speech2.remove( $('input') );
         speech2.remove( $('button') );

         // Replace input box with user's input as text
         speech2.html('<p>' + user_input + '</p>');


     });
 }



 /*----------------------
     Dialog (Speech)
 -----------------------*/
var pre_dialog = [
    " Hey ",
    " Hey ",
    " How are you? ",
    " input + button " ,
    " Glad to hear that <br> I've been doing well with my ice cream business ",
    " Really? <br> I thought you were just joking, its wonderful you have that now",
    " Yeah, <br> by the way, <br> what's your favorite flavor of ice cream?" ,
    " input + button " ,
    " Nice, <br> let's go to the parlor then "
]
var dialog = [];

$(pre_dialog).each(function( index,value ) {
    dialog.push('<p>' + value + '</p>');
});
