/* Example Code
The following is just some example code for you to play around with.
No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const HeapSort = require('./Sort').HeapSort;

// A link to our styles!
require('./index.css');

// Setup
const unsorted = [6, 5, 3, 1, 8, 7, 2, 4]
const heapSort = new HeapSort(unsorted);
const sorted = heapSort.sort();
const maxHeight = Math.max(...unsorted);

// Create Title
function createCheesyTitle(slogan) {
  const container = document.createElement('h1');
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}

const title = createCheesyTitle(heapSort.returnValue('Re-Engineer Yourself'));
document.getElementById('title').appendChild(title);

function changeTitle(event) {
  event.preventDefault();
  const newTitle = createCheesyTitle(document.getElementById('name-form').myname.value);
  const titleElement = document.getElementById('title');
  titleElement.removeChild(titleElement.firstChild);
  titleElement.appendChild(newTitle);
}

const form = document.querySelector('form');
document.addEventListener('DOMContentLoaded', () => {
  form.onsubmit = changeTitle;
});

// Initialization
const getArrayButton = document.querySelector('#get-array');
document.addEventListener('DOMContentLoaded', () => {
  getArrayButton.onsubmit = getRandomArray;
});

const createRandomArray = (length, max) => {
  const newArray = [];
  for (let i = 0; i < length; i += 1) {
    newArray.push(Math.round(Math.random() * max))
  }
  return newArray
}

const createBars = (array) => {
  for(let i = 0; i < array.length; i += 1) {
    const bar = document.createElement('div');
    const barId = 'bar'+ i;
    const height = array[i] / maxHeight * 300 + 'px';
    bar.setAttribute('class', 'bar');
    bar.setAttribute('id', barId);
    bar.style.height = height;
    sortWindow.append(bar);
  }
}

const getRandomArray = (event) => {
  event.preventDefault();
  removeChildrenFromSortWindow();
  const length = document.getElementById('get-array').arraylength.value;
  const max = document.getElementById('get-array').max.value;
  const randomArray = createRandomArray(length, max);
  createBars(randomArray);
}

const startButton = document.querySelector('#start');
document.addEventListener('DOMContentLoaded', () => {
  startButton.onclick = initializeSort;
});

const sortButton = document.querySelector('#sort');
document.addEventListener('DOMContentLoaded', () => {
  sortButton.onclick = sort;
});

const sortWindow = document.querySelector("#sort-window")
const unsortedArray = document.createTextNode(JSON.stringify(unsorted));

const initializeSort = (event) => {
  event.preventDefault();
  for(let i = 0; i < unsorted.length; i += 1) {
    const bar = document.createElement('div');
    const barId = 'bar'+ i;
    const height = unsorted[i] / maxHeight * 450 + 'px';
    bar.setAttribute('class', 'bar');
    bar.setAttribute('id', barId);
    bar.style.height = height;
    sortWindow.append(bar);
  }
}

const removeChildrenFromSortWindow = () => {
  while(sortWindow.firstChild) {
    sortWindow.removeChild(sortWindow.firstChild);
  }  
}

const sort = (event) => {
  event.preventDefault();
  removeChildrenFromSortWindow();
  for(let i = 0; i < sorted.length; i += 1) {
    const bar = document.createElement('div');
    const barId = 'bar'+ i;
    const height = sorted[i] / maxHeight * 450 + 'px';
    bar.setAttribute('class', 'bar '+ barId);
    bar.style.height = height;
    sortWindow.append(bar);
  }
}
