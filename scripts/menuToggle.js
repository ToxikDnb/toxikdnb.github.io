const menuToggle =
    document.getElementById(
        "menuToggle"
    );
const navLinks =
    document.getElementById("navLinks");
const header =
    document.getElementById("header");

menuToggle.addEventListener(
    "click",
    () => {
        navLinks.classList.toggle(
            "show"
        );
        menuToggle.classList.toggle(
            "rotated"
        );
        header.classList.toggle(
            "headerExpanded"
        );
    }
);
