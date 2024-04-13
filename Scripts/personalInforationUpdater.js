let fullname = document.getElementById("name");
let title = document.getElementById("title");
let pfp = document.getElementById("pfp");

let navbarContainer = document.getElementById("navbarContainer");

fetch("../Scripts/Data/personalInfo.json")
    .then((response) => response.json())
    .then((personalInformation) => {
        fullname.innerHTML = personalInformation.name;
        title.innerHTML = personalInformation.title;
        pfp.src = personalInformation.profilePicture;
        navbarElements = personalInformation["pages"];
        let pageName = window.location.pathname.split("/").pop();
        navbarElements.forEach((element) => {
            let navElement = document.createElement("a");
            if (element.link.split("/").pop() == pageName || (pageName == window.location.hostname && element.link == "")) {
                navElement.classList.add("ActivatedLink");
            }
            navElement.href = "https://" + window.location.hostname + "/" + element.link;
            navElement.innerHTML = element.name;
            navbarContainer.appendChild(navElement);
        });
    });
