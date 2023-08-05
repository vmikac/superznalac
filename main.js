
let number_to_guess = 0;
let score = 0;
let correct_answers = 0;


async function get_image() {
    let prefix = "images/";
    number_to_guess = Math.floor(Math.random() * 7)+1;    
    res = prefix + number_to_guess + ".png";
   

    const start = document.getElementById("start");
    const image = document.getElementById("main_image");
    const guess = document.getElementById("guess");
    const number = document.getElementById("number");

    image.src = res;

    await new Promise(r => setTimeout(r, 2000));
    image.src = "images/superznalac.png";
    start.style.visibility = "hidden";
    guess.style.visibility = "visible";
    number.style.visibility = "visible";
    return res;
}

function guess(){
    const start = document.getElementById("start");
    const guess = document.getElementById("guess");
    const number = document.getElementById("number");
    const myHeading = document.querySelector("h1");

    if (number.value == number_to_guess){
        correct_answers = correct_answers + 1;
        myHeading.textContent = "Bravo! Broj dobrih odgovora: " + correct_answers ; 
    } else {
        myHeading.textContent = "smola..."; 
    }

    start.style.visibility = "visible";
    guess.style.visibility = "hidden";
    number.style.visibility = "hidden";
}
  