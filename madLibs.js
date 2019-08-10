function transMadLibsGather()
    {
//this creates localstorage variables named after each inputfield
      for (x = 1; x < 10; x++) { 
      localStorage.setItem("localInput" + x, $("#" + x + "i").val());

      //this shows what was input
      console.log(localStorage.getItem("localInput" + x));
    }
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