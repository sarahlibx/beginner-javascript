function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function destoryPopup(popup) {
    popup.classList.remove('open');
    await wait(1000);
    //remove popup entirely
    popup.remove();
    popup = null;
}

function ask(options) {
    return new Promise(async function(resolve) {
// create a pop up with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML('afterbegin', 
    `<fieldset>
    <label>${options.title}</label>
    <input type="text" name="input"/>
    <button type="submit">Submit</button>
    </fieldset>`
);
// check if they want a cancel button
if(options.cancel) {
    const skipButton = document.createElement('button');
    skipButton.type = 'button';
    skipButton.textContent = 'Cancel';
    popup.firstElementChild.appendChild(skipButton);
// listen for click on cancel button
skipButton.addEventListener('click', function() {
    resolve(null);
}, {once: true } 
);
}
// listen for submit event on the inputs
popup.addEventListener('submit', function(e) {
    e.preventDefault();
    resolve(e.target.input.value);
    // remove from DOM entirely
    destoryPopup(popup);
}, { once: true });
//when someone does submit it, resolve data that was in the input boxes

//insert popup into DOM
document.body.appendChild(popup);
// short timeout before adding open class to place open class to the end of the event loop
await wait(50);
popup.classList.add('open');
    });
}

//select all buttons that have a question
async function askQuestion(e) {
    const button = e.currentTarget;
    const cancel = 'cancel' in button.dataset;
    const answer = await ask({ title: button.dataset.question, cancel, });
}
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions = [
    { title: 'What is your name?' },
    { title: 'What is your age?', cancel: true },
    { title: 'What is your dogs name?' },
  ];
  
  // utility function
  async function asyncMap(array, callback) {
    // make an array to store our results
    const results = [];
    // loop over our array
    for (const item of array) {
      results.push(await callback(item));
    }
    // when we are done the loop, return it!
    return results;
  }
  
  async function go() {
    const answers = await asyncMap(questions, ask);
    console.log(answers);
  }
  
  go();
  
  // async function askMany() {
  //   for (const question of questions) {
  //     const answer = await ask(question);
  //     console.log(answer);
  //   }
  // }
  
  // askMany();
  