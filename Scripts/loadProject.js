let params = new URLSearchParams(window.location.search);
let uid = params.get("uid");

fetch("/Scripts/Data/projects.json").then(
    (response) => response.json().then(
        (data) => {
            let project = data.projects.find((project) => project.uid === uid);
            document.getElementById("projectTitle").textContent = project.name;
            document.getElementById("projectSubtitle").textContent = project.subtitle;
            document.getElementById("projectParagraph").textContent = project.fullDescription;
            document.getElementById("projectImage").src = project.image;
            document.getElementById("projectImage").alt = "image of " + project.name;
            document.getElementById("projectLink").href = project.link;
        }
    )
)