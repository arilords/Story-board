// variables
var counter = 2;

$("#return").click(function(){
  counter = 2
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
        case 2:
          speechone.innerHTML = "<p> How you doin? </p>";
          break;
        case 3:
          speechtwo.innerHTML = "<p> I'm all good bro! </p>";
          break;

        case 4:
          speechone.innerHTML = "<p> What chu feel like doin today? </p>";
          break;
        case 5:
          speechtwo.innerHTML = "<p> What did you have planned? </p>";
          break;
        case 6:
          speechone.innerHTML = "<p> We can stay here, go to the park, we can even go watch a movie. </p>";
          $('body').keypress(function(e){
            if(e.keycode == 32){
              speechone.innerHTML= "<p> Any of those sound interesting to you? </p>";
            }
          })
          break;

          // Make this a prompt for the reader
        case 7:
          speechtwo.innerHTML = "<p>  </p>";
          speechtwo.style.display = "block";
          speechtwo.style.display = "none";
          alert("line 47");
          break;

        // Based on their answer of staying, going to the park, or going ot see a movie, change the background accordingly.
        case 8:
          speechone.innerHTML = "<p> What chu feel like doin today </p>";
          speechone.style.display = "block";
          speechtwo.style.display = "none";
          alert("line 55");
          break;
        default:
          speechtwo.innerHTML = "<p> Speech Complete </p>";
          speechtwo.style.display="block";
          speechone.innerHTML = "<p> Speech Complete </p>";
    }
}

var even_or_odd = counter % 2;

    if(even_or_odd === 0){
      speechone.style.display = "block";
      speechtwo.style.display = "none";
      alert("line 69");
    }

    else if(even_or_odd === 1){
      speechtwo.style.display = "block"
      speechone.style.display = "none";
      alert("line 75");
    }
    else{
      alert("ERROR");
    }
