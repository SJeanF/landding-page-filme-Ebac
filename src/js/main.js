document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('[data-tab-button]');
    headerToggler(window.scrollY);
    
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].addEventListener('click', function() {
            const reference = this.getAttribute("data-tab-button")
            trocarAba(reference);
            trocarIndicadorBotao(tabButtons, reference)
        })
    }

    window.addEventListener('scroll', function () {
        headerToggler(window.scrollY);
    })

})

function trocarAba(toSwitch) {
    const abas = document.querySelectorAll('[data-tab-screen]')

    for (let i = 0; i < abas.length; i++) {
        abas[i].classList.remove('designs__list--is-active')
        
        if (abas[i].getAttribute('data-tab-screen')  == toSwitch) {
            abas[i].classList.add('designs__list--is-active')
        }
    }
}

function trocarIndicadorBotao(botoes, toSwitch) {
    
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList.remove('designs__tabs__button--is-active')

        if (botoes[i].getAttribute('data-tab-button') == toSwitch) {
            botoes[i].classList.add('designs__tabs__button--is-active')
        }
    }
}

function headerToggler (alturaAtual) {
    const notiButton = document.querySelector('.header__container-buttton__not');
    const hero = document.querySelector('.hero');
    const heroPaddingHeight = parseFloat(window.getComputedStyle(hero).paddingTop.replace('px',''));

    if (alturaAtual < heroPaddingHeight) {
        notiButton.classList.add('header__container-buttton__not--is-visible');
    } else {
        notiButton.classList.remove('header__container-buttton__not--is-visible');
    };
};