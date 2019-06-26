class Menu {
    constructor(element) {
        this.element = element;
        this.menuIcon = document.querySelector('.menu-icon');

        this.menuIcon.addEventListener('click', () => this.menuSelect());
    }
    menuSelect() {
        this.element.classList.toggle('display-menu');
        this.element.classList.toggle('hide-menu');
    }
}
const menu = document.querySelector('.mobile-menu')
new Menu(menu);