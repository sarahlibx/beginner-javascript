function wait(ms=0) {
    return new Promise(resolve=> setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150) {
    return Math.floor(Math.random() * (max - min) + min);
}

//async for of loop

async function draw(el) {
    const text = el.textContent;
    let soFar = '';
    for(const letter of text) {
       // console.log(letter);
        soFar += letter;
        el.textContent = soFar;
        //wait for some time
        const { typeMin, typeMax } = el.dataset;
        const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
        await wait(amountOfTimeToWait);
    }
}

document.querySelectorAll('[data-type]').forEach(draw);

//recursion

// function draw(el) {
// let index = 1;
// const text = el.textContent;
// const {typeMin, typeMax} = el.dataset;
// async function drawLetter() {
// el.textContent = text.slice(0, index);
// index += 1;
// const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
// await wait(amountOfTimeToWait);
// if(index <= text.length) { <-- this is the exit condition that prevents the browser from breaking or going into an infinite loop
// drawLetter(); <-- this is the recursive part where drawLetter calls itself
// }
// }
// when function draw() runs, kick off drawLetter
// drawLetter();
// }