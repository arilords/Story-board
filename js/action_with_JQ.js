// variables
var counter = 0;
var input = $("input").val()

if(counter === 0){
$("#speechone").html("<p> Hello </p>");
$("#speechone").css('display', 'block');
$("#speechtwo").html("<p> Hello </p>");
$("#speechtw").css('display', 'block');
}


$("#return").click(function(){
  counter = 0;
  console.log(counter);
  alert("Hello")
});

$("#continue").click(function(){
  counter = counter + 1;
  console.log(counter);
  runDialog();
});

function runDialog(){
    switch(counter) {
        case 1:
          $("#speechone").html("<p> How you doin? </p>");
          break;
        case 2:
          $("speechtwo").html("<p> I'm all good bro! </p>");
          break;
        case 3:
          $("#speechone").html("<p> What chu feel like doin today? </p>");
          break;
        case 4:
          $("#speechtwo").html("<p> What did you have planned? </p>");
          break;

         case 5:
           $("#speechone").html("<p> We can stay here, go to the park, we can even go watch a movie. </p>");
           break;

           // Make this a prompt for the reader
         case 6:
          $("#speechtwo").html("<p> Lets go to the movie then. </p>")
          break;

         // Based on their answer of staying, going to the park, or going ot see a movie, change the background accordingly.
         case 7:
            $("#speechone").html("<p> Alright then let's go. </p>");
            $("#continue").click(function(){
            $("#first-person, #second-person" ).animate({ "left": "+=1000px" }, "slow" );
            });
            break;
        case 8:
        $("body").css("background", "url('http://img.cinemablend.com/quill/2/8/3/f/6/4/283f649655a0e013be40632f951db69518cc8bfb.jpg')");
        $("body").css("background-repeat" ,"no-repeat");
        $("body").css("background-size" ,"100% 100%")
        break;

         default:
          $("#speechtwo").html("<p> Speech Complete </p>");
          $("#speechtwo").css('display', 'block');
          $("#speechone").html("<p> Speech Complete </p>");
    }
    var even_or_odd = counter % 2;

        if(even_or_odd === 1){
          $("#speechone").attr('style', 'display:block;');
          $("#speechtwo").attr('style', 'display:none;');
        }

        else if(even_or_odd === 0){
          $("#speechtwo").attr('style', 'display:block;');
          $("#speechone").attr('style', 'display:none;');
        }
        else{
          alert("ERROR");
        }

}
