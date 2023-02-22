//your code here
// Todo: Make M+ M- and MC functional
// empty string input
let string = "";

//accessing every n each button
let buttons = document.querySelectorAll('.button');

//calls each button element from an array
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    //condition checking if button clicked is '='
    if(e.target.innerHTML == '='){
      //eval - executes and evaluates an argument
      string = eval(string);
      document.querySelector('input').value = string;
    }
    // condition if we clicked on cancel button, input should be empty.
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    // input filled be selected button that is clicked
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})