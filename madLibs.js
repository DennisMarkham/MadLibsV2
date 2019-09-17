var errors = [];

function checkInput()
{
  //logs number of input fields
  var fields = document.querySelectorAll("span");
  var blanks = 0;

 for (x = 1; x < fields.length; x++) { 
 var wordType = $("#" + x + "i").parent().text();
      console.log(wordType);
  if (wordType == "FAMOUS PERSON: " && $("#" + x + "i").val().match("^[A-Z]") == false)
    //switching the && to an || results in a strange problem.  It seems it adds to the
  //error array because it does not go to the appropriate page, but no alert shows up.
  //but I did try to fix the regEx algorithim by taking from "regEx Tomfollery"
  //yet the check still does not work, even when I capitalize it and switch all the letters
  


      {
        errors.push("Names must start with capital letter");
      }

    if ($("#" + x + "i").val() == "")
    {
      console.log("blank field");
      alert("blank field");
      blanks++;
      {break;}
      //break ensures a lot of error messages don't show up
      
    }
      
      
    }

    //regex check does not work, everything else runs smoothly, however.
    if (errors.length < 0)
      {
        alert(errors.join('\n'));
      }
       else if (blanks == 0  && errors.length == 0)
      {
        transMadLibsGather();
      }
}


function transMadLibsGather()
    {
//this creates localstorage variables named after each inputfield
      for (x = 1; x < 10; x++) { 
      localStorage.setItem("localInput" + x, $("#" + x + "i").val());

      //this shows what was input
      console.log(localStorage.getItem("localInput" + x));
    }

    window.location.href = $(".urlHolder").text();
    //wow!  This works if you get rid of the form thing
  }

  function transMadLibsDistribute(){
//runs through list of store local items
  for (x = 1; x < 10; x++) { 
  	//creates variable called 'input' for the specific item
    var input = localStorage.getItem("localInput" + x);
      console.log(input);
      //puts the input variable in each corresponding output.
      $("#" + x + "o").text(input);
    }
  }