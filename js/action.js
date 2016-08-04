// Variables
var counter = 0;
var continue_btn = document.getElementById("continue");
var return_btn = document.getElementById("return")

// First Dialog
var speechone = document.getElementById("speechone");
speechone.innerHTML = "<p> Hello </p>";

var speechtwo = document.getElementById("speechtwo");
speechtwo.innerHTML = "<p> Hello </p>";
// on click of Back to beginnign button
return_btn.addEventListner("click" , function(){
  counter = 0
  console.log(counter);
  runDialog();
});

// On click of continue button
continue_btn.addEventListener("click" , function(){
    counter = counter + 1
    console.log(counter);
    runDialog();
});


function runDialog(){
    switch(counter) {
        case 0:
          speechone.innerHTML = "<p> Press Continue </p>";
          speechone.style.display = "block";
          speechtwo.innerHTML = "<p> Press Continue </p>"
          speechtwo.style.display = "block";
          break;
        case 1:
          speechone.innerHTML = "<p> How you doin? </p>";
          speechtwo.style.display = "none";
          break;
        case 2:
          speechtwo.innerHTML = "<p> I'm all good bro! </p>";
          speechtwo.style.display = "block"
          speechone.style.display = "none";
          break;

        case 3:
          speechone.innerHTML = "<p> What chu feel like doin today? </p>";
          speechone.style.display = "block";
          speechtwo.style.display = "none";
          break;
        case 4:
          speechtwo.innerHTML = "<p> What did you have planned? </p>";
          speechtwo.style.display = "block";
          speechone.style.display = "none";
          break;
        case 5:
          speechone.innerHTML = "<p> We can stay here, go to the park, we can even go watch a movie. </p>";
          speechone.style.display = "block";
          speechtwo.style.display = "none";
          break;
        case 6:
          speechone.innerHTML = "<p> Any of those sound interesting to you? </p>";
          speechone.style.display = "block";
          speechtwo.style.display = "none";
          break;

          // Make this a prompt for the reader
        case 7:
          speechone.innerHTML = "<p>  </p>";
          speechone.style.display = "block";
          speechtwo.style.display = "none";
          break;

        // Based on their answer of staying, going to the park, or going ot see a movie, change the background accordingly.
        case 8:
          speechone.innerHTML = "<p> What chu feel like doin today </p>";
          speechone.style.display = "block";
          speechtwo.style.display = "none";
          break;
        default:
          speechtwo.innerHTML = "<p> Speech Complete </p>";
          speechtwo.style.display="block";
          speechone.innerHTML = "<p> Speech Complete </p>";
    }
}
