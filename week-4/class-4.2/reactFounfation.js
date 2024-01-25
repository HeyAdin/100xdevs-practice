let id = 1;

function createChild(title, description, id) {
    const div = document.createElement("div");
    div.setAttribute('id', `${id}`);

    const todoTitle = document.createElement('h2');
    todoTitle.textContent = title;
    div.appendChild(todoTitle);

    const todoDescription = document.createElement('p');
    todoDescription.textContent = description;
    div.appendChild(todoDescription);

    const markBtn = document.createElement("button");
    markBtn.textContent = "Mark as Done";
    markBtn.setAttribute('onclick', `markAsDone(${id})`);
    div.appendChild(markBtn);

    return div;
}

function updateDomAccToState(state){
    const container = document.querySelector("#container");
    container.innerHTML = "";
    for(const eachTodo of state){
        const child = createChild(eachTodo.title,eachTodo.description,eachTodo.id);
        container.appendChild(child);
    }
}

const state = [{
    title : "Eat Healthy",
    description : " I will eat Healthy",
    id : 1,
},{
    title : "fix sleep schedule",
    description : " I will sleep early",
    id : 2,
}];

updateDomAccToState(state);