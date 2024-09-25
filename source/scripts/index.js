/* в этот файл добавляет скрипты*/

const buttonMenu = document.querySelector('.main-header__navigation-toggle');
const menu = document.querySelector('.main-header__navigation');

const mqLarge = window.matchMedia('(max-width: 767px)');
if (mqLarge.matches){
  menu.classList.add('main-header__navigation--closed');

  buttonMenu.addEventListener('click', () =>{
    menu.classList.toggle('main-header__navigation--closed');
    menu.classList.toggle('main-header__navigation--opened');
    buttonMenu.classList.toggle('main-header__navigation-toggle--close');
  });
}
