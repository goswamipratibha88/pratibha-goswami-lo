let footer = document.createElement('footer');
document.body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
console.log(thisYear);

footer = document.querySelector('footer');

let copyright = document.createElement('p');

copyright.innerHTML = `©  Pratibha Goswami ${thisYear}`;

footer.appendChild(copyright);


const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];

let skillsSection = document.querySelector("#skills");
let skillsList = document.querySelector("#skills > ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}