document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("navbarToggleBtn");
    const collapseMenu = document.getElementById("navbarCollapse");
    const navLinks = collapseMenu ? collapseMenu.querySelectorAll(".nav-link") : [];

    if (toggleBtn && collapseMenu) {
        toggleBtn.addEventListener("click", function () {
            collapseMenu.classList.toggle("show");
        });

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            collapseMenu.classList.remove("show");
        });
      });
    }

    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    if (
    cookieBanner &&
    !localStorage.getItem("cookiesAccepted") &&
    !localStorage.getItem("cookiesDeclined")
    ) {
        cookieBanner.style.display = "flex";
    }

    if (acceptBtn) {
        acceptBtn.addEventListener("click", function () {
            localStorage.setItem("cookiesAccepted", "true");
            if (cookieBanner) cookieBanner.style.display = "none";
        });
    }

    if (declineBtn) {
        declineBtn.addEventListener("click", function () {
            localStorage.setItem("cookiesDeclined", "true");
            if (cookieBanner) cookieBanner.style.display = "none";
        });
    }
  });

