let fullname = document.getElementById("name");
let title = document.getElementById("title");
let pfp = document.getElementById("pfp");
let navbarContainer = document.getElementById("navbarContainer");
fetch("/Scripts/Data/personalInfo.json")
    .then((response) => response.json())
    .then((personalInformation) => {
        fullname.innerHTML = personalInformation.name;
        title.innerHTML = personalInformation.title;
        pfp.src =
            "https://" +
            window.location.hostname +
            "/" +
            personalInformation.profilePicture;
        navbarElements = personalInformation["pages"];
        let pageName = window.location.pathname.split("/").pop();
        navbarElements.forEach((element) => {
            let navElement = document.createElement("a");
            navElement.href =
                "https://" + window.location.hostname + "/" + element.link;
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
