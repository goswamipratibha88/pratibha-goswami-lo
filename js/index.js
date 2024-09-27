// Code for hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// Code for creating footer

let footer = document.createElement('footer');
footer.className = "footer";
document.body.appendChild(footer);
const today = new Date();
const thisYear = today.getFullYear();
console.log(thisYear);
footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = `© ${thisYear} Pratibha Goswami `;
footer.appendChild(copyright);

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


//Code for adding skills 

const skills = ["JavaScript", "HTML", "CSS", "GitHub", "SVN", "JAVA", "VSCode", "Eclipse", "XML", "Selenium", "SQL", "HP ALM", "JIRA"];
let skillsSection = document.querySelector("#Skills");
let skillsList = document.querySelector("#Skills > ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}


// Code for adding git hub repos in portfolio project section 

fetch('https://api.github.com/users/goswamipratibha88/repos')
    .then((response) => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('Failed  to fetch');
        }
    })
    .then((data) => {
        const repositories = JSON.parse(data);
        console.log(repositories);

        let projectSection = document.getElementById("Projects");
        let projectList = document.createElement("ul");
        projectSection.appendChild(projectList);


        for (let i = 0; i < repositories.length; i++) {
            let li = document.createElement("li");

            let a = document.createElement("a");
            a.href = 'https://github.com/goswamipratibha88/' + repositories[i]["name"];
            a.textContent = repositories[i]["name"];
            li.appendChild(a);
            projectList.appendChild(li);

        }
    })
    .catch((error) => {
        console.error("Error fetching data:", error.message);
    })


//code for Leave a message
let messageForm = document.getElementById("leave_message");
messageForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('usersName').value;
    const email = document.getElementById('usersEmail').value;
    const message = document.getElementById('usersMessage').value;

    const tableBody = document.querySelector('#messageTable tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${message}</td>
        <td><button onclick="removeMessage(this)">Remove</button></td>
    `;

    tableBody.appendChild(row);
    messageForm.reset();

});

function removeMessage(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
