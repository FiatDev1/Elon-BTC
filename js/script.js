const nav = document.querySelector('nav')

const hamburger = document.getElementById('hamburger')
const navmenu = document.getElementById('menu_list')

hamburger.addEventListener('click', () => {
  navmenu.classList.toggle('show')
})

window.addEventListener('scroll', () => {
  if (window.scrollY >= 50) {
    nav.classList.add('active_nav')
  } else {
    nav.classList.remove('active_nav')
  }
})

const faqs = document.querySelectorAll('.faq')

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active')
  })
})

// function openNav(){
//     document.getElementById('sidenav').style.width = "50%";
// }

// function closeNav(){
//     document.getElementById('sidenav').style.width = "0%";
// }

document.getElementById('hamburger').onclick = function () {
  openNav()
}

document.getElementById('close').onclick = function () {
    closeNav()
  }

function openNav() {
  document.getElementById('sidenav').style.display = 'block'
}

function closeNav() {
    document.getElementById('sidenav').style.display = 'none'
    document.getElementById('sidenav').style.transition = '.5s';
  }


  $(document).ready(function(){
    $(window).scroll(function(){
      if($(window).scrollTop()>300){
        $('.my_bttn').fadeIn(250);
      }
      else{
        $('.my_bttn').fadeOut(250);
      }
    });
    $('.my_bttn').click(function(){
      $('html,body').animate(
        {scrollTop:0},400
        );
    });
  });


//   new Swiper(".swiper-container", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 2000,
//         pauseOnMouseEnter: false
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true
//     },
// });
