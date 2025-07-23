/*
Template Name: ShopGrids - Bootstrap 5 eCommerce HTML Template.
Author: GrayGrids
*/

(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });

    document.addEventListener('click', function (event) {
        const menu = document.querySelector('#navbarSupportedContent'); // 메뉴 영역
        const toggler = document.querySelector('.mobile-menu-btn');     // 햄버거 버튼

        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnToggler = toggler.contains(event.target);

        // 메뉴가 열려있고, 메뉴 및 햄버거 버튼이 아닌 다른 곳을 클릭한 경우
        if (menu.classList.contains('show') && !isClickInsideMenu && !isClickOnToggler) {
            // Bootstrap 5의 collapse를 수동으로 닫기
            const bsCollapse = bootstrap.Collapse.getInstance(menu);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        }
    });


})();