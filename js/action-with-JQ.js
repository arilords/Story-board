/*-----------------------
    Initial Variables
------------------------*/

// Establish counter
var d_counter = 0;

// Simplify html element selectors
var speech1 = $('#first-person-speech');
var speech2 = $('#second-person-speech');

var head1 =  $('#first-person > .head');
var head2 =  $('#second-person > .head');

// Backgrounds
var Galaxy = 'http://media.moddb.com/images/articles/1/181/180861/Galaxy_Rip.jpg';
var IceCreamShop = 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Aria_-_Ice_Cream_Shop_-_2010-03-06.jpg';
var Park = 'https://upload.wikimedia.org/wikipedia/commons/a/a6/New-York_-_Bryant_Park.jpg';

// Dialog
var pre_dialog = [
   " Hey ",
   " Hey ",
   " It seems like it has been such a long time. How have you been? ",
   " Great, I just finished a coding project, so I'm relaxing today.",
   " Nice, I just opened up an ice cream shop. It was a lot of work, but it's finally up and running.",
   " Amazing, what kind of flavors do you have? ",
   "All kinds! Well not literally, haha, but we have a strong variety and have a rotating daily special where we experiment with new flavors",
   "Great, well I was headed to the park but I definetly want to check out your shop",
   " Let's check out both, today is my off day too. Where would you like to head first? >",
   "some speech",
   "some speech2"
]

var dialog = [];

// Reformating for dialog is handled in the 'Weirdo Placement' section


/*------------------------
        Functions
------------------------*/

function runDialog() {

    // Simpler variable to access dialog array
    var d = dialog[d_counter];

      // Test evenness or oddness of counter, 0 means even, 1 means odd
      var even_or_odd = d_counter % 2;

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
          alert("even_or_odd calculating error");
      } // End of even_or_odd if/else statement

} //End of run dialog function


function presentOptions() {
    // Announce that this function has began to run
    console.log('run presentOptions function');

    // variable for current item in dialog array
    var d = dialog[d_counter];

    // Change body background galaxy when stated as current dialog item
    $('#overlay').css('display', 'flex');

    // Background change message to console
    console.log('Option has been selected and background changed');

    // Re-enable controls now that function has finished
    $('.controls').disabled = true;
}



/*-------------------------
      Weirdo Placement
--------------------------*/

// THIS HAS TO BE PLACED AFTER THE CREATION OF VARIABLES AND FUNCTIONS, BUT BEFORE EVENT HANDLERS

// Reformat dialog
$(pre_dialog).each( function( index,value ) {

    dialog.push('<p> ' + value + ' </p>')

});


/*-------------------------
      Event Handlers
--------------------------*/

/*  When continue is clicked...  */
$('#continue-btn').click( function() {

    // Log times continue has been clicked
    var d_plus_1 = d_counter + 1
    console.log('Clicks on continue: ' + d_plus_1 );

    // Variable for current item in dialog array
    var d = dialog[d_counter];

    // If string DOESN'T include arrow (just regular dialog)...
    if ( d.indexOf('>') == -1) {
        // Run dialog function
        runDialog();
    }
    // If string DOES include arrow...
    else {
        runDialog();

        // Disable controls so user doesn't skip presentOptions function
        $('.controls').disabled = true;

        // Give user time to read dialog and then run presentOptions function
        // 3 seconds = 3000 milliseconds
        setTimeout(function(){
            presentOptions();
        }, 3000);
    }

    // Increment d_counter variable
    d_counter += 1;
});

/*  When refresh is clicked...  */
$('#refresh-btn').click( function() {

    // Ensure counters are 0
    d_counter = 0;
    console.log('dialog counter = ' + d_counter);

    b_counter = 0;
    console.log('background counter = ' + b_counter);

    // Reset background
    $('body').css('background', 'black');

    // Empty divs
    speech1.html("");
    speech2.html("");

    // Disappear speech divs
    speech1.attr('style', 'display: none');
    speech2.attr('style', 'display: none');

    // Log that refresh has successfully ran
    console.log('program reset');
});
