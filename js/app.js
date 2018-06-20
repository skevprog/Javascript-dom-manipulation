
const changeColorButton = document.getElementById('changeColor');
const resetColorButton = document.getElementById('resetColor');
const firstLorem = document.getElementById('firstLorem');

var colorValue = document.getElementById('colorValue');


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