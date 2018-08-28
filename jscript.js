// MODAL

const modal = document.querySelectorAll('.modal');
const modalContent = document.querySelectorAll('.myprojects__item');
const openBtn = document.querySelectorAll('.try');
const closeBtn = document.querySelectorAll('.modal__close');


// OPEN MODAL
for(let i = 0; i < openBtn.length; i++) {
    openBtn[i].addEventListener('click', function() {
    modal[i].style.display = 'block';
    });
}

// CLOSE MODAL
for(let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', function() {
    modal[i].style.display = 'none';
    });
}

// CLOSE BUTTON OUTSIDE OF THE MODAL
window.addEventListener('click', function(e) {
    if(e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// ESCAPE BUTTON TO CLOSE MODAL
window.addEventListener('keyup', function(e) {
    if(e.keyCode == 27) {
    for(let i = 0; i < modal.length; i++) {
        modal[i].style.display = 'none';
    }
    }
})


// SIDE BAR
const openSideMenu = document.querySelector('.hamburger__icon');
const sideMenu = document.querySelector('.sidenav');
const closeSideMenu = document.querySelector('.sidenav__close');

openSideMenu.addEventListener('click', openMenu);
closeSideMenu.addEventListener('click', closeMenu);

function openMenu() {
    sideMenu.style.width = '100%';
}

function closeMenu() {
    sideMenu.style.width = "0";
}
