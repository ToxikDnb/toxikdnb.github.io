let types = ["Core", "Accent"];
let current = -1;

function getType() {
    current = (current + 1) % types.length;
    return types[current];
}

async function getInterestTemplate() {
    try {
        const response = await fetch("/Scripts/Elements/interest.html");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.text();
        return data;
    } catch (error) {
        console.error(
            "There has been a problem with the fetch operation: ",
            error
        );
    }
}

function parseInterest(interest, interestTemplate) {
    let element = document.createElement("div");
    element.innerHTML = interestTemplate;

    let interestElement = element.firstElementChild;
    interestElement.classList.add(getType());
    interestElement.getElementsByTagName("h2")[0].textContent = interest.name;
    interestElement.getElementsByTagName("p")[0].textContent =
        interest.description;
    interestElement
        .getElementsByTagName("p")[0]
        .classList.add(getType());
    getType();
    document.getElementById("interestGrid").appendChild(interestElement);
}

function updateInterests(defaultInterest) {
    fetch("/Scripts/Data/interests.json")
        .then((response) => response.json())
        .then((data) => {
            interests = data["interests"];
            interests.forEach((interest) => {
                console.log(interest);
                parseInterest(interest, defaultInterest);
            });
        });
}

getInterestTemplate().then((defaultInterest) => {
    updateInterests(defaultInterest);
});
