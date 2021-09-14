let color = document.getElementById("colorPicker");
let gridHeight = document.getElementById("inputHeight");
let gridWidth = document.getElementById("inputWidth");
let size = document.getElementById("sizePicker");
let userGrid = document.getElementById("pixelCanvas");

size.addEventListener("submit", function (event)
  {console.log("asdfsadf");
  userGrid.innerHTML = "";
  event.preventDefault();
  makeGrid(gridHeight.value, gridWidth.value);});

  function makeGrid(gridHeight, gridWidth)
    {for (y = 0; y < gridHeight; y++)
      {var row = userGrid.insertRow(y);
      for (x = 0; x < gridWidth; x++)
        {var cell = row.insertCell(x);}}

  userGrid.addEventListener("click", function (event)
    {event.target.style.backgroundColor = color.value;});}
