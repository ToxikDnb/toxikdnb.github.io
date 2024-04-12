// Fetch the content of the footer.html file
fetch('/Scripts/Data/footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        // Append the footer content to the body element
        document.body.innerHTML += data;
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation: ', error);
    });