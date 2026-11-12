
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

// Buka dan tutup menu
menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu" : "Buka menu"
    );

});


// Tutup menu ketika link diklik
const menuLinks = document.querySelectorAll("#navbar a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Buka menu");

    });

});

console.log("Website SMK Swasta Prama Artha berhasil dijalankan!");
