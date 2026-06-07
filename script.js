function toggleMenu() {
    const menu=document.querySelector('.menu-links');
    const icon=document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}
new Typed("#typed-text", {
    strings: [
    "Aspiring Software Engineer",
    "Full Stack Developer",
    "AI & Computer Vision Enthusiast",
    "Building Real-World Solutions"
],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});
function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

    document.querySelectorAll(".theme-toggle")
        .forEach(btn =>
    btn.innerHTML = isDark
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>'
);
}
window.onload = () => {

    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark-mode");

        document.querySelectorAll(".theme-toggle")
            .forEach(btn =>
                btn.innerHTML = '<i class="fas fa-sun"></i>'
            );
    }
};
