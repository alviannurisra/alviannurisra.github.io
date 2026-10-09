document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("open");

        });


        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");

            });

        });


        document.addEventListener("click", (event) => {

            const insideMenu =
                navMenu.contains(event.target);

            const insideButton =
                menuToggle.contains(event.target);

            if (
                !insideMenu &&
                !insideButton
            ) {

                navMenu.classList.remove("open");

            }

        });


        document.addEventListener("keydown", (event) => {

            if (
                event.key === "Escape"
            ) {

                navMenu.classList.remove("open");

            }

        });

    }


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const updateNavigation = () => {

        const position =
            window.scrollY + 180;

        let current = "home";


        sections.forEach((section) => {

            const top =
                section.offsetTop;

            const height =
                section.offsetHeight;


            if (
                position >= top &&
                position < top + height
            ) {

                current =
                    section.id;

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    };


    window.addEventListener(
        "scroll",
        updateNavigation,
        {
            passive: true
        }
    );


    updateNavigation();


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                (
                    entries,
                    observer
                ) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.08
                }
            );


        elements.forEach(
            (element) => {

                observer.observe(
                    element
                );

            }
        );

    } else {

        elements.forEach(
            (element) => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const year =
        document.getElementById(
            "currentYear"
        );


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});
