// Select container
const container = document.querySelector('#container');
let box;

 
createDivs(16)

// First Grid
function createDivs(size){
  let totalSquares = size * size;
    for (let i = 0; i < totalSquares; i++) {
        // Create div elements
        box = document.createElement('div');
        // Assign grid-item class to div
        box.classList.add('grid-item');

        //confirm it to the container
        container.appendChild(box);
        box.addEventListener("mouseover", hoverBlack);
    }
    document.documentElement.style.setProperty("--rowNum", size);
    document.documentElement.style.setProperty("--colNum", size);
    return;
  }

  
  function getNewDivs(size){
    let totalSquares = size * size;
        for (let i = 0; i < size * size; i++) {

            // Create div elements
            box = document.createElement('div');
            box.classList.add('grid-item');

            //confirm it to the container
            container.appendChild(box);
            box.addEventListener("mouseover", hoverColor);
  }
    document.documentElement.style.setProperty("--rowNum", size);
    document.documentElement.style.setProperty("--rowCol", size);
    return;
  }

  function clearGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}


  // Color grid black
function hoverBlack(e) {
  const blackButton = document.getElementById('blackButton');
  blackButton.addEventListener("click", hoverBlack);
  if (e.target.className === "grid-item") {
    e.target.style.background = "black";
    e.target.style.cursor = 'pointer';
  }
}

// Randomize color output
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Color grid rainbow
function hoverColor(e){
  const rainbowButton = document.getElementById('rainbowButton');
  rainbowButton.addEventListener("click", hoverColor);
  if (e.target.className === "grid-item") {
    e.target.style.background = getRandomColor();
  }
}

// Prompt for response and catch any non numeric values
function getResponse(){
  let response = prompt("How many boxes would you like? " );
      getNewDivs(response)
      if (isNaN(response)){
        alert("Not a valid selection. Choose a number ex) 3, 4, and etc");
        return getResponse()
       }
       else{
         console.log(response);
        return response;
       }
}

  const nav = document.getElementById('navigation');
  nav.addEventListener("click", function(e) {
    if (e.target.id == "blackButton") {
      container.removeEventListener("mouseover", hoverColor);
      container.addEventListener("mouseover", hoverBlack);
    } else if (e.target.id == "rainbowButton") {
      container.removeEventListener("mouseover", hoverBlack);
      container.addEventListener("mouseover", hoverColor);
      
    } else if (e.target.id == "resetButton") {
      clearGrid()
      getResponse()
      
    }
  });
