const nav = document.querySelector('nav')

const hamburger = document.getElementById('hamburger')
const navmenu = document.getElementById('menu_list')

hamburger.addEventListener('click', () => {
  navmenu.classList.toggle('show')
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= 50) {
    nav.classList.add('active_nav')
  } else {
    nav.classList.remove('active_nav')
  }
});

const faqs = document.querySelectorAll('.faq')

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active')
  })
});


document.getElementById('hamburger').onclick = function () {
  openNav()
};

document.getElementById('close').onclick = function () {
    closeNav()
  };

function openNav() {
  document.getElementById('sidenav').style.display = 'block'
};

function closeNav() {
    document.getElementById('sidenav').style.display = 'none'
    document.getElementById('sidenav').style.transition = '.5s';
  };


  document.getElementById('button').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.closebtn').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
});



  $(document).ready(function(){
    $(window).scroll(function(){
      if($(window).scrollTop()>300){
        $('.arrow-up-btn').fadeIn(250);
      }
      else{
        $('.arrow-up-btn').fadeOut(250);
      }
    });
    $('.arrow-up-btn').click(function(){
      $('html,body').animate(
        {scrollTop:0},400
        );
    });
  });




