/*-----------------------
    Initial Variables
------------------------*/
// Buttons
var continue_btn = document.getElementById("continue-btn");
var refresh_btn = document.getElementById("refresh-btn");

// Establish a counter
var counter = 0;

// People
var head_one = document.getElementsByClassName('head')[0];
var head_two = document.getElementsByClassName('head')[1];

// Speech divs
var speech_divs = document.getElementsByClassName("speech");
var one_speech_div = document.getElementById("first-person-speech");
var second_speech_div = document.getElementById("second-person-speech");

/*----------------------
        Dialog
-----------------------*/
var dialog = [
    "<p> Hello, <br> How are you? </p>",
    "<input class='input' type='text'><button class='input-btn'> Enter</button></input>",
]

/*------------------------
        Functions
------------------------*/
function inputToText() {
    // Variable for js created button with class 'input-btn'
    var submit = document.getElementsByClassName('input-btn')[0];

    // When that button is clicked...
    submit.addEventListener('click', function() {
        // Variable for input
        var input = document.getElementsByClassName('input')[0];
        // Variable for input value (the text)
        var user_input = input.value;
        // Log the user's input
        console.log(user_input);
        // Replace input box with user's input as text
        second_speech_div.innerHTML = '<p>' + user_input; + '</p>';
    });
}
// Dialog Function
function runDialog() {

    // Dialog dependent on counter (number of times continue is clicked)
    switch(counter) {

        case 1:
            // Inital dialog from person 1
            one_speech_div.innerHTML = dialog[counter-1];
            break;

        case 2:
            // Input and button added to speech 2
            second_speech_div.innerHTML = dialog[counter-1];
            inputToText();
            break;

        default:
          one_speech_div.innerHTML = "<p>Speech complete</p>";
          second_speech_div.innerHTML = "<p>Speech complete</p>";
      } // End of switch


      // Test evenness or oddness of counter, 0 means even, 1 means odd
      var even_or_odd = counter % 2;

      // Which speech div should appear
      if (even_or_odd === 1) {
          one_speech_div.style.display = "inline-block";
          second_speech_div.style.display = "none";

          head_one.style.boxShadow = "0 0 40px white";
          head_two.style.boxShadow = "none";
      }
      else if (even_or_odd === 0) {
          one_speech_div.style.display = "none";
          second_speech_div.style.display = "inline-block";

          head_one.style.boxShadow = "none";
          head_two.style.boxShadow = "0 0 40px white";
      }
      else {
          alert("error");
      } // End of if else statement

 } //End of run dialog function



/*-------------------------
      Events Handlers
--------------------------*/
// When refresh is clicked...
refresh_btn.addEventListener("click", function() {

    // Ensure counter is 0
    counter = 0;
    console.log(counter);

    // Disappear speech divs
    one_speech_div.style.display = "none";
    second_speech_div.style.display = "none";

    // Log that refresh has successfully ran
    console.log('program reset');
});


// When continue is clicked...
continue_btn.addEventListener("click", function() {
    // Log current counter number
    console.log(counter);

    // Increment counter variable
    counter = counter + 1;

    // Run dialog function
    runDialog();

});
