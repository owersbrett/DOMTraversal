/**
 * ONE: create a new branch with the name develop-{your name}
 * 
 * TWO: write some JavaScript to find the article element with an id that has your name.
 * Using that element as a starting point, select the element with class="title" and change the innerHtml to be 
 * your full name. Next, Select the element with a class="subtitle" and add a class of "twitter-handle" to the classList.
 * Finally, select the img element and setAttribute src to the relative url string that loads your picture.
 * 
 * THREE: write some JavaScript that finds ALL articles with a class="professor". Loop through each element and set the child
 * img element src to the relative clown file. Change the title to 'Clown', and subtitle to '@arrayClown' 
 */


 
let brett = document.getElementById("brett");

console.log(brett);

let title = brett.querySelector(".title");

console.log(title);
title.innerText = "Brett Joseph Owers" ;

let subtitle = brett.querySelector(".subtitle");

console.log(subtitle);

let image = brett.querySelector("img");

console.log(image);

image.setAttribute('src', 'images/brett.jpg');

subtitle.classList.add("twitter-handle");


let professors = document.querySelectorAll('.professor');

professors.forEach(professor =>{
    let eachProfessorsImage = professor.querySelector('img');
    let professorTitle = professor.querySelector('.title');
    let professorSubTitle = professor.querySelector('.subtitle');

    eachProfessorsImage.setAttribute('src', 'images/clown.jpg');
    professorTitle.innerText = "Clown";
    professorSubTitle.innerText = "@arrayClown"

});