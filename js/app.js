const changeColorButton = document.getElementById('changeColor');
const resetColorButton = document.getElementById('resetColor');
const firstLorem = document.getElementById('firstLorem');

var colorValue = document.getElementById('colorValue');

window.document.onload = removeLiElement();
/*Check if the color input has value for enable the changeColor button*/
function typing() {

   if (colorValue.value.trim().length > 0) {
      changeColorButton.disabled = false;
      resetColorButton.disabled = false;
   } else {
      changeColorButton.disabled = true;
      resetColorButton.disabled = true;
   }

}

/*Change the color of the paragraph*/
function changeColor() {

   let color = colorValue.value;
   firstLorem.style.color = color;
   colorValue.value = '';
   changeColorButton.disabled = true;

}

/*Resets the color of the paragraph*/
function resetColor() {

   let buttonsDiv = document.getElementById('buttons');
   colorValue.value = '';
   firstLorem.style.color = 'black';
   resetColorButton.disabled = true;

}

/*Creates a new paragraph element and inserts it into the dom */
function createParagraph() {

   const newParagraph = document.createElement('p');
   let text = document.getElementById('nodeText').value;
   newParagraph.textContent = text;

   if (text.trim().length == 0) {
      alert('You must enter a text');
   } else {
      document.querySelector('#newElementContainer').appendChild(newParagraph);
      document.getElementById('nodeText').value = '';
   }

}

/*Removes a li element by clicking it */
function removeLiElement() {

   let liElements = document.querySelectorAll('#languages-list > li'); //returns an array of li elements

   for (let i = 0; i < liElements.length; i++) {
      liElements[i].style.cursor = 'pointer';
      liElements[i].addEventListener('click', () =>
         liElements[i].remove()
      );

   }

}

/*Counter*/

let counterValue = 0;
let counterElement = document.getElementById('counterValue');
counterElement.textContent = counterValue;

function increaseCounter() {
   counterValue++;
   counterElement.textContent = counterValue;
}

function decreaseCounter() {
   if (counterValue <= 0) {
      alert('For decrease the counter value, it must have a value greater than "0" ');
   } else {
      counterValue--;
   }
   counterElement.textContent = counterValue;
}

const Modal = document.getElementById('modal');
/* Show Modal */
function showModal() {
   Modal.style.visibility = 'visible';
}

/* Hide Modal */
function hideModal() {
   Modal.style.visibility = 'hidden';
}

/* Add element */
function addOne() {
 let elementValue = document.getElementById('element').value;
 let li = document.createElement('li');
 let list = document.getElementById('list');

 li.textContent = elementValue;
 list.appendChild(li);
 document.getElementById('element').value = ''
}