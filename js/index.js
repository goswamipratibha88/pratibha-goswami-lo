
let footer = document.createElement('footer');
document.body.appendChild(footer);
const today = new Date();
const thisYear = today.getFullYear();
console.log(thisYear);

footer = document.querySelector('footer');

let copyright = document.createElement('p');

copyright.innerHTML = `© Pratibha Goswami ${thisYear}`;


footer.appendChild(copyright);


const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];

let skillsSection = document.querySelector("#skills");
let skillsList = document.querySelector("#skills > ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

let messageForm = document.getElementById("leave_message");
    messageForm.addEventListener('submit', function(event){
    event.preventDefault();
    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let userMessage = event.target.usersMessage.value;

    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Message: ', userMessage);

    let messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');

    let newMessage = document.createElement("li");

    newMessage.innerHTML = `
    <a href="mailto:${email}">${name}</a>: 
    <span>${userMessage}</span>
`;
    
let removeButton = document.createElement("button");
removeButton.innerText ="Remove";
        removeButton.type ="button";
    removeButton.addEventListener('click', function(){
        let entry = removeButton.parentNode;
        entry.remove();

    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();

    });


    
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

        let projectSection = document.getElementById("projects");
        let projectList = document.createElement("ul");
        projectSection.appendChild(projectList);


        for (let i = 0; i < repositories.length; i++) {
            let project = document.createElement("li");
            project.innerText = repositories[i]["name"]
            projectList.appendChild(project);
        }
    })
    .catch((error) => {
        console.error("Error fetching data:", error.message);
    })



