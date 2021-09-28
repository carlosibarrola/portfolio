window.addEventListener('DOMContentLoaded', event => {

    // Funciones de Navbar
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };


    navbarShrink();


    document.addEventListener('scroll', navbarShrink);


    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Toggle cuando se colapsa en modo responsive
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // SimpleLightbox plugin para el portfolio
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    /* Popup */

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 555) {
            document.querySelector('.go-top').classList.add('show');
        } else {
            document.querySelector('.go-top').classList.remove('show');
        }
    }

    document.querySelector('.go-top').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

});