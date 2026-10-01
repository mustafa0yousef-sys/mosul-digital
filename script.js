document.addEventListener("DOMContentLoaded", function () {

    // السنة الحالية في الفوتر
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // التمرير السلس بين أقسام الموقع
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // تغيير شكل الهيدر عند النزول بالصفحة
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (!header) {
            return;
        }

        if (window.scrollY > 50) {

            header.style.background = "rgba(24, 0, 6, 0.97)";

        } else {

            header.style.background = "rgba(24, 0, 6, 0.92)";

        }

    });

});