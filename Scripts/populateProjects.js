function getProjectTemplate() {
    return fetch("/Scripts/Elements/project.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then((data) => {
            return data;
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

    let projectElement = element.firstElementChild;

    projectElement.getElementsByTagName("a")[0].href = project.link;
    projectElement.getElementsByTagName("h2")[0].textContent = project.name;
    projectElement.getElementsByTagName("h3")[0].textContent = project.subtitle;
    projectElement.getElementsByTagName("p")[0].textContent =
        project.description;
    projectElement.getElementsByTagName("img")[0].alt =
        "image of " + project.name;
    projectElement.getElementsByTagName("img")[0].src = project.image;

    document.getElementById("projectGrid").appendChild(projectElement);
}

function updateProjects(defaultProject) {
    fetch("/Scripts/Data/projects.json")
        .then((response) => response.json())
        .then((data) => {
            projects = data["projects"];
            projects.forEach((project) => {
                console.log(project);
                parseProject(project, defaultProject);
            });
        });
}

getProjectTemplate().then((defaultProject) => {
    updateProjects(defaultProject);
});