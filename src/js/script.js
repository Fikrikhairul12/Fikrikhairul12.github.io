// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})


document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".project-item");

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const filter = btn.getAttribute("data-filter");

            items.forEach((item) => {
                const category = item.getAttribute("data-category");

                if (filter === "all" || filter === category) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });

            // Optional: ganti tombol aktif
            filterButtons.forEach(b => b.classList.remove("ring-2", "ring-white"));
            btn.classList.add("ring-2", "ring-white");
        });
    });
});
