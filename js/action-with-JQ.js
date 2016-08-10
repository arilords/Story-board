/*-----------------------
    Initial Variables
------------------------*/

// Establish counter
var d_counter = 0;
var b_counter = 0;

// Simplify html element selectors
var speech1 = $('#first-person-speech');
var speech2 = $('#second-person-speech');

var head1 =  $('#first-person > .head');
var head2 =  $('#second-person > .head');

// Backgrounds
var backgrounds = [
    'http://media.moddb.com/images/articles/1/181/180861/Galaxy_Rip.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Aria_-_Ice_Cream_Shop_-_2010-03-06.jpg'
]



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


function newBackground() {
    console.log('b-counter : ' + b_counter);
    $('body').css( 'background', 'url(' + backgrounds[b_counter] + ')' );

    // Empty divs
    speech1.html("");
    speech2.html("");

    // Disappear speech divs
    speech1.attr('style', 'display: none');
    speech2.attr('style', 'display: none');

    // Increase background counter
    b_counter += 1;

    // Background change message to console
    console.log('BACKGROUND CHANGE');
}



/*-------------------------
      Event Handlers
--------------------------*/
// Dialog
var pre_dialog = [
    newBackground,
   " Hey ",
   " Hey ",
   " How are you? ",
   " Good, I just finished a coding project, how about you? " ,
   " Well I just opened an ice cream shop. <br> It was hard work so I'm exhausted, but glad that it's up and running ",
   " Really? <br> I thought you were just joking, that's wonderful!",
   " Yeah, <br> by the way, <br> what's your favorite flavor of ice cream?" ,
   " Vanilla or cake batter " ,
   " Nice, <br> let's go get some then ",
   newBackground,
   "some more words",
   "some more words 2"
]

var dialog = [];

// Reformat dialog
$(pre_dialog).each( function( index,value ) {
   // When a speech is too long...
   // Need to create this function

   if ( typeof value === 'string') {
       dialog.push('<p>' + value + '</p>');
   }
   else {
       dialog.push( value );
   }

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


/*  When continue is clicked...  */
$('#continue-btn').click( function() {

    // Log times continue has been clicked
    var d_plus_1 = d_counter + 1
    console.log('Clicks on continue since beginning: ' + d_plus_1 );


    if (typeof dialog[d_counter] === 'string') {
        // Run dialog function
        runDialog();
    } else {
        // Variable name in dialog array turned into an executing function
        dialog[d_counter]();
    }

    // Increment d_counter variable
    d_counter += 1;
});
