var errors = [];

function checkInput()
{
  //logs number of input fields
  var fields = document.querySelectorAll("span");
  var blanks = 0;

 for (x = 1; x < fields.length; x++) { 
    if ($("#" + x + "i").val() == "")
    {
      console.log("blank field");
      alert("blank field");
      blanks++;
      {break;}
      //break ensures a lot of error messages don't show up
      //but now how do I ensure the program keeps going
      //if there are no breaks?
    }
    if (blanks == 0)
      {
        transMadLibsGather()
      }




      //CHECK IF INPUT MATCHES WORD TYPE
      //checks the word before the field
      // var wordType = $("#" + x + "i").parent().text();
      // console.log(wordType);

      // //if its a certain wordtype and meets a certain condition,
      // //push an error to the errors array
      // if (wordType == "NOUN: " && $("#" + x + "i").val() == somecondition)
      // {
      //   errors.push("this is the error");
      // }
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

    window.location.href = $("#urlHolder").text();
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