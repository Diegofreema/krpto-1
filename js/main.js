$('#home-left').waypoint(
  function (direction) {
    $('.banner .left').addClass('animate__fadeInLeft');
  },
  { offset: '10%' }
);

$('#home-right').waypoint(
  function (direction) {
    $('.banner .right').addClass('animate__fadeInRight');
  },
  {
    offset: '10%',
  }
);

$('.logo').waypoint(
  function (direction) {
    $('.logo').addClass('animate__fadeInLeft');
  },
  {
    offset: '10%',
  }
);
$('.list').waypoint(
  function (direction) {
    $('.list').addClass('animate__fadeInRight');
  },
  {
    offset: '10%',
  }
);

$('.about').waypoint(
  function () {
    $('.about').addClass('animate__fadeInLeft');
  },
  {
    offset: '90%',
  }
);

$('.price').waypoint(
  function () {
    $('.price').addClass('animate__fadeInRight');
  },
  {
    offset: '90%',
  }
);
$('.fade').waypoint(
  function () {
    $('.fade').addClass('animate__fadeIn');
  },
  {
    offset: '90%',
  }
);
$('.event').waypoint(
  function () {
    $('.event').addClass('animate__fadeInLeft');
  },
  {
    offset: '100%',
  }
);

const menuBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-times');
const menu = document.querySelector('.list');
const lists = document.querySelectorAll('.list li');
const bannerRight = document.querySelector('.banner .right');
const bannerRightImg = document.querySelector('.imgRight');
const bannerLeft = document.querySelector('.banner .left');
const bannerItems = document.querySelectorAll('.opac');
const upBtn = document.querySelector('.fa-arrow-up');
const logoText = document.querySelector('.logo h1');
const navList = document.querySelector('.list');
const listUl = document.querySelector('.list ul');
const logo = document.querySelector('.logo');

menuBtn.addEventListener('click', () => {
  menu.classList.add('open');
});

closeBtn.onclick = () => {
  menu.classList.remove('open');
};

lists.forEach((list) => {
  list.onclick = () => {
    menu.classList.remove('open');
  };
});

upBtn.onclick = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.onscroll = () => {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    upBtn.style.display = 'block';
  } else {
    upBtn.style.display = 'none';
  }
};
window.onload = () => {
  if (navList.classList.contains('animate__fadeInRight')) {
    listUl.style.opacity = 1;
    bannerLeft.classList.add('animate__fadeInLeft');
    bannerRight.classList.add('animate__fadeInRight');
    bannerRightImg.style.opacity = 1;
    bannerItems.forEach((item) => {
      item.style.opacity = 1;
    });
  }
  if (logo.classList.contains('animate__fadeInLeft')) {
    logoText.style.opacity = 1;
  }
  if (bannerRight.classList.contains('animate__fadeInRight')) {
  }
  if (bannerLeft.classList.contains('animate__fadeInLeft')) {
  }
};
