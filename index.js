
document.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.style.backgroundColor = "#555"; // Change the background color on scroll
    } else {
        header.style.backgroundColor = "#333"; // Revert to the original background color
    }
});