fetch("/Scripts/Elements/pageEssentials.html")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.text();
    })
    .then((data) => {
        document.body.insertAdjacentHTML("afterbegin", data);
    })
    .catch((error) => {
        console.error(
            "There has been a problem with your fetch operation: ",
            error
        );
    });

fetch("/Scripts/Elements/footer.html")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.text();
    })
    .then((data) => {
        document.body.innerHTML += data;
    })
    .catch((error) => {
        console.error(
            "There has been a problem with your fetch operation: ",
            error
        );
    });
