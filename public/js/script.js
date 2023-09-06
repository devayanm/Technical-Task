// script.js

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    function handleFormSubmit(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        for (const [name, value] of formData.entries()) {
            console.log(`${name}: ${value}`);
        }
        const confirmationMessage = document.getElementById("confirmation-message");
        const contactForm = document.getElementById("contactForm");

        confirmationMessage.style.display = "block";
        contactForm.style.display = "none";
    }
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", handleFormSubmit);
    }

});




// accounts 
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


// scroll to top
const backToTopButton = document.getElementById("back-to-top");

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});
