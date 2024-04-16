let fullName = document.getElementById("name");
let title = document.getElementById("title");
let pfp = document.getElementById("pfp");
let navbarContainer = document.getElementById("navbarContainer");
fetch("/Scripts/Data/personalInfo.json")
    .then((response) => {
        console.log(response.status);
        return response.json();
    })
    .then((personalInformation) => {
        fullName.innerHTML = personalInformation.name;
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
