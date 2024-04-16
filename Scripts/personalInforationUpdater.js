document.addEventListener("DOMContentLoaded", function () {
    let fullname = document.getElementById("name");
    let title = document.getElementById("title");
    let pfp = document.getElementById("pfp");
    let navbarContainer = document.getElementById("navbarContainer");

    console.log("fullname: " + fullname);
    console.log("title: " + title);
    console.log("pfp: " + pfp);
    console.log("navbarContainer: " + navbarContainer);

    fetch("/Scripts/Data/personalInfo.json")
        .then((response) => {
            console.log(response.status);
            response.json();
        })
        .then((personalInformation) => {
            fullname.innerHTML = personalInformation.name;
            title.innerHTML = personalInformation.title;
            pfp.src =
                "https://" +
                window.location.hostname +
                personalInformation.profilePicture;
            navbarElements = personalInformation["pages"];
            let pageName = window.location.pathname.split("/").pop();
            navbarElements.forEach((element) => {
                let navElement = document.createElement("a");
                navElement.href =
                    "https://" + window.location.hostname + element.link;
                navElement.innerHTML = element.name;
                if (
                    (element.link == "" && pageName == "") ||
                    pageName == element.link.split("/").pop()
                ) {
                    let tempElement = document.createElement("div");
                    navElement.classList.add("ActivatedLink");
                    tempElement.appendChild(navElement);
                    navElement = tempElement;
                }
                navbarContainer.appendChild(navElement);
            });
        });
});
