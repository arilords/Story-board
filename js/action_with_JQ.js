// variables
var counter = 0;

$("#return").click(function(){
  counter = 1
  console.log(counter);
  runDialog();
});

$("#continue").click(function(){
  counter = counter + 1
  console.log(counter);
  runDialog();
});

$("#speechone").append("<p> Hello </p>");
$("#speechtwo").append("<p> Hello </p>");

function runDialog(){
    switch(counter) {
        case 1:
          speechone.innerHTML = "<p> How you doin? </p>";
          speechone.style.display = "block";
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
          speechtwo.innerHTML = "<p>  </p>";
          speechtwo.style.display = "block";
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
