var pwd = "532eaabd9574880dbf76b9b8cc00832c20a6ec113d682299550d7a6e0f345e25";

async function hash(input) {
    const msgUint8 = new TextEncoder().encode(input);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    return hashHex;
}

async function checkPassword() {
    var attempt = prompt("Enter admin password");
    var hashedAttempt = await hash(attempt);
    if (hashedAttempt == pwd) {
        alert("Access granted");
    } else {
        alert("Access denied");
        window.location.href = "https://www.blackaby.uk/";
    }
}

checkPassword();
