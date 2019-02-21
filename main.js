

let test = document.getElementsByClassName("grid-item");


createDivs()








function createDivs(){
    const container = document.querySelector('#container');
    let box = [];
    let saveBox = [];
    let newBox = [];
    let newSaveBox = [];
    //let test = document.getElementById("grid-item")

    for (var i = 0; i < 256; i++) {
        // Create div elements
        box[i] = document.createElement('div');
        // Apply attributes an id named "grid-item"
        box[i].setAttribute("class", "grid-item");
        //box[i].style.backgroundColor = 'yellow';
        //box[i].style.cursor = 'pointer';
        

        box[i].addEventListener("mouseover", (e) => {
                //console.log("Hello " + this + " (" + this.innerHTML + ") from event listener [0]");
                
                
            });
        //});
        //confirm it to the container
        saveBox[i] = container.appendChild(box[i]);
    }
  
    

    return;
  }

function createPointer(){
    // grid-item is a node list. It looks and acts much like an array.
    const pointer = document.querySelectorAll('grid-item');

    // we use the .forEach method to iterate through each div
    pointer.forEach((div) => {

    // and for each one we add a 'hover' listener
    pointer.addEventListener('mouseover', (e) => {
    let getPointer = div.className;
    getPointer.style.cursor = pointer;
    });
    });
  }
