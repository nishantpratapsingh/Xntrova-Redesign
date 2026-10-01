/* =====================================================
   XNTROVA TECHNOLOGIES
   Homepage Redesign
   JavaScript
   ===================================================== */


/* =========================
   MOBILE NAVIGATION
========================= */

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {

    menuBtn.addEventListener("click", () => {

        mobileNav.classList.toggle("open");

    });


    const mobileLinks =
        mobileNav.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("open");

        });

    });

}


/* =========================
   HEADER SCROLL EFFECT
========================= */

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   TESTIMONIAL SLIDER
========================= */

const track =
    document.getElementById("testimonialTrack");

const testimonials =
    track
        ? track.querySelectorAll(".testimonial")
        : [];

const dots =
    document.querySelectorAll(".dot");

const nextBtn =
    document.getElementById("nextBtn");

const prevBtn =
    document.getElementById("prevBtn");


let currentSlide = 0;


function showSlide(index) {

    if (!track || testimonials.length === 0) {
        return;
    }


    if (index >= testimonials.length) {

        currentSlide = 0;

    } else if (index < 0) {

        currentSlide =
            testimonials.length - 1;

    } else {

        currentSlide = index;

    }


    track.style.transform =
        `translateX(-${currentSlide * 100}%)`;


    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === currentSlide
        );

    });

}


if (nextBtn) {

    nextBtn.addEventListener("click", () => {

        showSlide(currentSlide + 1);

    });

}


if (prevBtn) {

    prevBtn.addEventListener("click", () => {

        showSlide(currentSlide - 1);

    });

}


dots.forEach(dot => {

    dot.addEventListener("click", () => {

        const slide =
            Number(dot.dataset.slide);

        showSlide(slide);

    });

});


/* Automatic testimonial rotation */

let sliderInterval =
    setInterval(() => {

        showSlide(currentSlide + 1);

    }, 6000);


/* Pause autoplay while hovering */

if (track) {

    track.addEventListener("mouseenter", () => {

        clearInterval(sliderInterval);

    });


    track.addEventListener("mouseleave", () => {

        sliderInterval =
            setInterval(() => {

                showSlide(currentSlide + 1);

            }, 6000);

    });

}


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();


            if (!name) {

                formMessage.textContent =
                    "Please enter your name.";

                formMessage.style.display =
                    "block";

                return;

            }


            formMessage.textContent =
                "Thank you! Your enquiry has been received. We will get back to you soon.";

            formMessage.style.display =
                "block";


            contactForm.reset();

        }
    );

}


/* =========================
   CURRENT YEAR
========================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================
   ESCAPE KEY
   CLOSE MOBILE MENU
========================= */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        mobileNav
    ) {

        mobileNav.classList.remove("open");

    }

});


/* =========================
   PROCESS CARD INTERACTION
========================= */

const processCards =
    document.querySelectorAll(".process-card");


processCards.forEach(card => {

    card.addEventListener("click", () => {

        processCards.forEach(item => {

            item.classList.remove("active");

        });

        card.classList.add("active");

    });

});