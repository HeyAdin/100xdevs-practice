function todo() {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const container = document.querySelector("#container");
    container.appendChild(createChild(title,description));
}

function createChild(title, description) {
    const div = document.createElement("div");
    div.setAttribute('id', `${title}`)

    const todoTitle = document.createElement("h1");
    todoTitle.textContent = title;
    div.appendChild(todoTitle);

    const todoDescription = document.createElement("p");
    todoDescription.textContent = description;
    div.appendChild(todoDescription);

    const markBtn = document.createElement("button");
    markBtn.textContent = "Mark as Done";
    div.appendChild(markBtn);

    return div;
}