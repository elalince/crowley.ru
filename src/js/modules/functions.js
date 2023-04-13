/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

export function showNav() {

    const navbarLink = document.querySelector( '.navbar__profile-link');
    const navbarMenu = document.querySelector( '.navbar__menu');

    $(navbarLink).on('click', function() {
        $(navbarMenu).toggleClass('navbar__menu--open')
    });

    document.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(navbarMenu);
        const withinLink = e.composedPath().includes(navbarLink);

        if ( ! withinBoundaries && ! withinLink ) {
            $(navbarMenu).removeClass('navbar__menu--open')
        }
    })
}

export function showPostControls() {

    const postControlsLink = document.querySelector( '.post__controls-link');
    const postControlsMenu = document.querySelector( '.post__menu');

    $(postControlsLink).on('click', function() {
        $(postControlsMenu).toggleClass('post__menu--open')
    });

    document.addEventListener( 'click', (e) => {
        const withinBoundaries2 = e.composedPath().includes(postControlsMenu);
        const withinLink2 = e.composedPath().includes(postControlsLink);

        if ( ! withinBoundaries2 && ! withinLink2 ) {
            $(postControlsMenu).removeClass('post__menu--open')
        }
    })
}

export function placeholderHide() {

    const wtfText = document.querySelector( '.wtf__addtext');
    const wtfPlaceholder = document.querySelector( '.wtf__placeholder');

    $(wtfText).on('focus', function() {
        $(wtfPlaceholder).addClass('hidden')
    });
}

export function showProfileInfo() {

    const infoLink = document.querySelector( '.profile__info-btn');
    const infoBlock = document.querySelector( '.profile__info');

    $(infoLink).on('click', function() {
        $(infoLink).toggleClass('profile__info-btn--active')
        $(infoBlock).toggleClass('profile__info--full')
    });
}