function updatePersonalInformation() {
    fetch("/Scripts/Data/personalInfo.json")
        .then((response) => {
            return response.json();
        })
        .then((personalInformation) => {
            document.getElementById("name").innerHTML =
                personalInformation.name;
            document.getElementById("title").innerHTML =
                personalInformation.title;
            document.getElementById("pfp").src =
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
                document.getElementById("menu").appendChild(navElement);
            });
        });
}

updatePersonalInformation();
