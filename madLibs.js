var errors = [];

function checkInput()
{
  //logs number of input fields
  var fields = document.querySelectorAll("span");
  var blanks = 0;

 for (x = 1; x < fields.length; x++) { 
 var wordType = $("#" + x + "i").parent().text();
 var input = $("#" + x + "i").val();
      console.log(wordType);
      console.log(input);
  if (wordType == "FAMOUS PERSON: " && /^[A-Z]/.test(input) == false  && input != "")
    
  // adding "+1" initially made maliIn functional but mcDonaldsIn non-functional (even after fixing)
    //that 4o id problem.  Getting rid of it made both functional. Interesting.
      {
        errors.push("Names must start with capital letter");
      }


  if (wordType != "FAMOUS PERSON: "  && wordType != "COUNTRY: " && /[A-Z]/.test(input))
  {
    errors.push("Only the first letter of a proper-noun should be capitalized")
  }    

  if (/[!?]/.test(input))
  {
    errors.push("Leave punctuation marks out of answers.")
  }

    if ($("#" + x + "i").val() == "")
    {
      console.log("blank field");
    
      errors.push("Blank field")
      {break;}
      //break supposed to ensure "blank field" only shows up but doesn't reall work
      
    }
      
      
    }

    //regex check does not work, everything else runs smoothly, however.
    //alright, this was all so bizarre.  Remember you flipped the sign.
    //that means before...OH!  Either way it goes down to the else-if 
    //statement!  That explains it.

    //okay, now I'm uploading this to git, and after this we are going to 
    //make "blanks" just another error
    if (errors.length > 0)
      {
        alert(errors.join('\n'));
      }
       else
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