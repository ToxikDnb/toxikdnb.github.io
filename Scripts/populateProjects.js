function getProjectTemplate() {
    return fetch("/Scripts/Elements/project.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .catch((error) => {
            console.error(
                "There has been a problem with the fetch operation: ",
                error
            );
        });
}

function parseProject(project, projectTemplate) {
    let element = document.createElement("div");
    element.innerHTML = projectTemplate;

    element.querySelector("#link").href = project.link;
    element.querySelector("#title").textContent = project.name;
    element.querySelector("#description").textContent = project.description;
    element.querySelector("#image").alt = "image of " + project.name;
    element.querySelector("#image").src = project.image;

    document.querySelector("#projectGrid").appendChild(element.firstChild);
}

function updateProjects(defaultProject) {
    fetch("/Scripts/Data/projects.json")
        .then((response) => response.json())
        .then((data) => {
            projects = data["projects"];
            projects.forEach((project) => {
                parseProject(project, defaultProject);
            });
        });
}

let defaultProject = getProjectTemplate();

updateProjects(defaultProject);
