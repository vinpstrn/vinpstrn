
// function progressBar() {
//     var html5 = document.querySelector('.p-html5');
//     var html = document.querySelector('.t-html5');
//     var css = document.querySelector('.t-css3');    
//     var css3 = document.querySelector('.p-css3');
//     var js = document.querySelector('.p-js');
//     var ps = document.querySelector('.p-ps');
//     var width = 0;
//     var id = setInterval(frame, 20);

//     function frame() {
//         if(width >= 90) {
//             clearInterval(id);
//         } else {
//             width++;
//             html5.style.width = width + "%";
//             css3.style.width = width + "%";
//             js.style.width = width + "%";
//             ps.style.width = width + "%";
//             html.innerHTML = width * 1 + "%";
//             css.innerHTML = width * 1 + "%";
//         }
//     }
// }

// progressBar();

function openSlideMenu() {
    document.getElementById('slide-menu').style.width = '25rem';
}

function closeSlideMenu() {
    document.getElementById('slide-menu').style.width = '0';
}