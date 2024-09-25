
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


// Code for adding skills in portfolio skills section

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


//Code for sending message in 'Leave a Message' section and viewing messages

let messageForm = document.getElementById("leave_message");
messageForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let userMessage = event.target.usersMessage.value;

    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Message: ', userMessage);

    let messageSection = document.getElementById('viewmessages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement("li");

    newMessage.innerHTML = `
    <a href="mailto:${email}">${name}</a>   :  <span>${email}</span>  :  <span>${userMessage}</span>`;

    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";
    removeButton.addEventListener('click', function () {
        let entry = removeButton.parentNode;
        entry.remove();

    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();

});
