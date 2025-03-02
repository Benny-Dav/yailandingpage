document.addEventListener("DOMContentLoaded", function () {
    const revealImg = document.getElementById("revealimg");

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const elementTop = revealImg.getBoundingClientRect().top;
        const triggerPoint = windowHeight * 0.8; // Adjust trigger point as needed

        if (elementTop < triggerPoint) {
            revealImg.classList.add("active");
        } else {
            revealImg.classList.remove("active"); // Remove for re-triggering effect
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once to check on load
});
