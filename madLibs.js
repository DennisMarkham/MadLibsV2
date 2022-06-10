

//creates an array of errors to be displayed
var errors = [];

function checkInput()
{
  //logs number of input fields for forloop
  var fields = document.querySelectorAll("span");

  //stores number of blank fields
  var blanks = 0;

 for (x = 1; x < fields.length + 1; x++) {  
 var wordType = $("#" + x + "i").parent().text();
 var input = $("#" + x + "i").val();
      console.log(wordType);
      console.log(input);
  if (wordType == "FAMOUS PERSON: " && /^[A-Z]/.test(input) == false  && input != "")
      {
        errors.push("Names must start with capital letter");
      }


  // if (wordType != "FAMOUS PERSON: "  && wordType != "COUNTRY: " && /[A-Z]/.test(input))
  // {
  //   errors.push("Only the first letter of a proper-noun should be capitalized")
  // }    
  //this is just too anal.  Decided after I got this error for capitalizing a state

  if (/[!?]/.test(input))
  {
    errors.push("Leave punctuation marks out of answers.")
  }

  if ($("#" + x + "i").val() == "")
    {
      console.log("blank field");

      blanks++

      //I used to push each blank as an individual error in the array, no longer
    }
      
//if there are two or more periods in a row
if (/[.{2,}]/.test(input))
{
errors.push("Two periods or decimals in a row")
}      


    }

    //I updated this to smooth it out.  Now instead of saying "blank field" for every blank,
    //it just displays the number of blanks
    if (errors.length > 0  || blanks > 0)
      {
        
        //if there are no errors, but there are "blanks", it creates an error based on the number
        //of blanks
        if (blanks > 0)
        {
          errors.push(blanks + " blank field(s)");
        }

        alert(errors.join('\n'));
        errors = [];
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