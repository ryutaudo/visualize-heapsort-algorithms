/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const HeapSort = require('./Sort').HeapSort;

// A link to our styles!
require('./index.css');
const unsorted = [6, 5, 3, 1, 8, 7, 2, 4]
const heapSort = new HeapSort(unsorted);
const sorted = heapSort.sort();

function createCheesyTitle(slogan) {
  const container = document.createElement('h1');
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}

const title = createCheesyTitle(heapSort.returnValue('Re-Engineer Yourself'));
document.getElementById('title').appendChild(title);

/*
An simple example of how you can make your project a bit more
interactive, if you would like.

In our `index.html` page, we have a short form.
Here is the code that talks to it.
*/
function changeTitle(event) {
  event.preventDefault();
  console.log('What is an event?', event);
}

const form = document.querySelector('form');
document.addEventListener('DOMContentLoaded', () => {
  form.onsubmit = changeTitle;
});

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
  const maxHeight = Math.max(...unsorted);
  for(let i = 0; i < unsorted.length; i += 1) {
    console.log(i)
    const bar = document.createElement('div');
    const barId = 'bar'+ i;
    const height = unsorted[i] / maxHeight * 450 + 'px';
    bar.setAttribute('class', 'bar');
    bar.setAttribute('id', barId);
    bar.style.height = height;
    sortWindow.append(bar);
  }
}

const sort = (event) => {
  event.preventDefault();
  const sortedArray = document.createTextNode(JSON.stringify(sorted));
  unsortedArray.remove();
  sortWindow.append(sortedArray);
}
