

// Navigation Bar animation
const burger = document.querySelector(".burger");

burger.addEventListener("click", function (e) {
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    nav.classList.toggle("nav-active");
    // burger animation
    burger.classList.toggle("toggle");

    // Animating menu tray
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3 + 0.3
                }s`;
        }
    });
});

// Covid Banner Toggle
// let ShowBanner = false;

// const Banner = document.querySelector(".banner");
// const closeBtn = document
//     .querySelector(".fa-window-close")
//     .addEventListener("click", hiddeBanner);

// function hiddeBanner() {
//     if (!ShowBanner) {
//         Banner.classList.add("hide");
//         window.setTimeout(() => {
//             Banner.classList.add("remove");
//         }, 300);
//         localStorage.setItem("banner", ShowBanner);

//         // Set the banner state
//         ShowBanner = true;
//     } else {
//         Banner.classList.remove("hide");
//         Banner.classList.remove("remove");
//         localStorage.removeItem("banner");
//     }
// }

// // Check if the Banner was removed so it won't
// // Get added to the dom
// window.addEventListener("DOMContentLoaded", (event) => {
//     event.preventDefault();


//     if (localStorage.getItem("banner")) {
//         hiddeBanner();
//     }
// });

// window.setTimeout(() => {
//     if (localStorage.getItem("banner")) {
//         localStorage.removeItem("banner");
//     }

//     displayModal();
// }, 5000);

// // Show  Modal when scroll down
// const modal = document.querySelector(".modal");

// const span = document.getElementsByClassName("close")[0];
// // When the user clicks on <span> (x), close the modal


// // Pop State
// let PopUp = {
//     open: false,
//     submitted: false,
// };

// function displayModal() {
//     if (localStorage.getItem("submitted")) {
//         PopUp.open = true;
//     }

//     if (!PopUp.open) {
//         modal.style.display = 'block'

//         PopUp.open = true;
//     }
// }

// const form1 = document.querySelector(".form-1");
// const form2 = document.querySelector(".form-2");

// // Form validation
// function validateForm() {
//     let x =
//         document.forms["News_letter_subscription"][
//             "Please send essay writting tips to"
//         ].value;
//     if (x == "") {
//         alert("Please provide an email");
//         return false;
//     } else {
//         return true;
//     }
// }

// // Submit button On Modal Pressed
// const submit = document
//     .querySelector(".bsubmit")
//     .addEventListener("click", function () {
//         if (!validateForm()) {
//             console.log("You can't validate ");
//         } else {
//             PopUp.submitted = true;

//             document.querySelector(".form-1").submit();
//             modal.style.display = "none";
//             localStorage.setItem("submitted", PopUp.submitted);
//         }
//     });


// span.onclick = function () {
//     modal.style.display = "none";
//     modalappt.style.display = 'none';
//     appt = false;
// };




// // Close button on Modal Pressed
// const bclosed = document
//     .querySelector(".b-close")
//     .addEventListener("click", function (e) {
//         modal.style.display = "none";
//     });