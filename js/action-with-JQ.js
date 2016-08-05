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

// Dynamically created elements
 var $button = "<button class='input-btn'> submit </button>";
 var $input = "<input class='input-box' type='text'></input>";


/*-------------------------
      Event Handlers
--------------------------*/
// When a speech is too long...


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
    var console_counter =  counter + 1
    console.log('Clicks on continue since: ' + console_counter );

    // Increment counter variable
    counter = counter + 1;

    // Run dialog function
    runDialog();
});


/*------------------------
        Functions
------------------------*/
// Convert user inputs to text for speech boxes
function inputToText() {

    // When the dynamically created button is clicked...
    $(document).on('click', '.input-btn', function() {

        // Variable for speech input
        var user_input = $('.input-box').val();

        // Log the user's input
        console.log('User Input: ' + user_input);

        // Replace input box with user's input as text
        speech2.html('<p>' + user_input + '</p>');
    });
}


function runDialog() {
    var d = dialog[counter-1];
    // Dialog dependent on counter (number of times continue is clicked)
    switch(counter) {

        case 1:
            // Inital dialog from person 1
            speech1.html(d);
            break;

        case 2:
            // Input and button added to speech 2
            speech2.html(d);
            inputToText();
            break;
        case 3:
            speech1.html( d );
            break;
        case 4:
            speech2.html( d );
            break;
        case 5:
            speech1.html( d );
            break;
        case 6:
            speech2.html( d );
            break;
        default:
          speech1.html("<p>Speech complete</p>");
          speech2.html("<p>Speech complete</p>");
      } // End of switch


      // Test evenness or oddness of counter, 0 means even, 1 means odd
      var even_or_odd = counter % 2;

      // Which speech div should appear
      if (even_or_odd === 1) {
          speech1.attr('style', 'display: inline-block');
          speech2.attr( 'style', 'display: none');

          head1.attr('style', 'box-shadow: 0 0 40px white');
          head2.attr('style', 'box-shadow: none');

          console.log( 'Person 1 : ' + speech1.text() );
      }
      else if (even_or_odd === 0) {
          speech1.attr('style', 'display: none');
          speech2.attr( 'style', 'display: inline-block');

          head1.attr('style', 'box-shadow: none');
          head2.attr('style', 'box-shadow: 0 0 40px white');

          console.log( 'Person 2 : ' + speech2.text() );
      }
      else {
          alert("error");
      } // End of if else statement

 } //End of run dialog function


 /*----------------------
     Dialog (Speech)
 -----------------------*/
var pre_dialog = [
    " Hey ",
    " Hey ",
    " How are you? ",
    $input + '<br>' + $button ,
    " Glad to hear that <br> By the way, what's your favorite ice cream flavor? ",
    $input + '<br>' + $button ,
    " Nice, <br> let's go to the parlor then "
]
var dialog = [];


$(pre_dialog).each(function( index,value ) {
    dialog.push('<p>' + value + '</p>');
});
