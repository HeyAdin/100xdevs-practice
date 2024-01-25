let id = 1;
function todo() {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const container = document.querySelector("#container");
    container.appendChild(createChild(title, description, id++));
}

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
