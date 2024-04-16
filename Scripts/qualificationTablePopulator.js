function addQualification(gradeType, qualification, table) {
    let row = table.insertRow(-1);
    let type = row.insertCell(0);
    let subject = row.insertCell(1);
    let grade = row.insertCell(2);

    type.innerHTML = gradeType;
    subject.innerHTML = qualification.subject;
    grade.innerHTML = qualification.grade;
}

function updateQualifications() {
    let table = document.getElementById("qualificationsTable");
    fetch("/Scripts/Data/qualifications.json")
        .then((response) => response.json())
        .then((qualificationsFile) => {
            for (property in qualificationsFile) {
                data = qualificationsFile[property];
                data.forEach((element) => {
                    let key = Object.keys(element)[0];
                    addQualification(
                        property,
                        {
                            subject: key,
                            grade: element[key],
                        },
                        table
                    );
                });
            }
        })
        .catch((error) => console.error("An error occurred:", error));
}

updateQualifications();