// Make a div
const div = document.createElement("div");
// add a class of wrapper to it
div.classList.add("wrapper");
// put it into the body
document.body.appendChild(div);
// make an unordered list

const ul = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`;
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
div.innerHTML = ul;

// create an image
const img = document.createElement("img");
// set the source to an image
img.src = "https://picsum.photos/500";
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add("cute");
// add an alt of Cute Puppy
img.alt = "cute puppy!";
// Append that image to the wrapper
div.appendChild(img);
// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;
const ulElement = div.querySelector('ul');
// put this div before the unordered list from above
ulElement.insertAdjacentElement('beforeBegin', myHTML);
// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');

// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
