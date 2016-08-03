/*-----------------
    Variables
------------------*/
// Assign html speech divs to variables
var one_speech_div = document.getElementById("first-person-speech");
var second_speech_div = document.getElementById("second-person-speech");
var speech_div = document.getElementsByClassName("speech");
// Assigm html buttons to variables
var continue_btn = document.getElementById("continue-btn");
var refresh_btn = document.getElementById("refresh-btn");

// Establish a counter
var counter = 0;



/*-------------------------
      Functionality
--------------------------*/
// When refresh is clicked...
refresh_btn.addEventListener("click", function() {
    // Ensure counter is 0
    counter = 0;
    // Disappear speech divs
    one_speech_div.style.display = "none";
    second_speech_div.style.display = "none";
});

// When continue is clicked...
continue_btn.addEventListener("click", function() {
    counter = counter + 1;
    runDialog();
});


function runDialog() {
  switch(counter) {

    case 1:
        // Assign text to speech-div
        one_speech_div.innerHTML = "<p> Hello, <br> How are you? </p>";
        break;
    case 2:
      // Assign text to speech-div
        second_speech_div.innerHTML = "<input type='text'><button class='input-btn'> Enter</button></input>";
        break;

    default:
      one_speech_div.innerHTML = "<p>Speech complete</p>";
      second_speech_div.innerHTML = "<p>Speech complete</p>";
  }


  // Test evenness or oddness of counter
  var even_or_odd = counter % 2;
  // Which speech_div should appear
  // 0 means even, 1 means odd
  if (even_or_odd === 1) {
      one_speech_div.style.display = "inline-block";
      second_speech_div.style.display = "none";
  }
  else if (even_or_odd === 0) {
      one_speech_div.style.display = "none";
      second_speech_div.style.display = "inline-block";
  }
  else {
      alert("error");
  }




}
