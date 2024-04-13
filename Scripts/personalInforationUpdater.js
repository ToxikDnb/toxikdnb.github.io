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
            if(element.link == "index.html") element.link = "/";
            // If link not homepage, add "/Pages/"
            if (pageName == "index.html" || pageName == "") {
                element.link = "Pages/" + element.link;
            } else if (element.link == "/") {
                element.link = "../" + element.link;
            }
            if (element.link.includes(pageName)) {
                let div = document.createElement("div");
                div.classList.add("ActivatedLink");
                div.innerHTML = element.name;
                navElement.appendChild(div);
            } else {
                navElement.innerHTML = element.name;
            }
            navElement.href = element.link;
            navbarContainer.appendChild(navElement);
        });
    });
