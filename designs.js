//setting variables for the color...
let color = document.getElementById("colorPicker");
//for the height and width picked by the user...
let gridHeight = document.getElementById("inputHeight");
let gridWidth = document.getElementById("inputWidth");
//and for the size of the grid based on the height and width
let size = document.getElementById("sizePicker");
let userGrid = document.getElementById("pixelCanvas");

//adding event listener so the height and width can be changed by the user
size.addEventListener("submit", function (event)
  {console.log("asdfsadf");
  userGrid.innerHTML = "";
//event.preventDefault() stops the height and width from "defaulting" to 1
  event.preventDefault();
//calling function to make the grid per the height and width
  makeGrid(gridHeight.value, gridWidth.value);});

function makeGrid(gridHeight, gridWidth)
//looping over to insert rows and cells
  {for (y = 0; y < gridHeight; y++)
    {var row = userGrid.insertRow(y);
    for (x = 0; x < gridWidth; x++)
      {var cell = row.insertCell(x);}}

//letting the user pick a color for their masterpiece
userGrid.addEventListener("click", function (event)
  {event.target.style.backgroundColor = color.value;});}
