// menu

let overlay = document.getElementById('overlay');
let openMenu = document.getElementById('openMenu');
let mobileMenu = document.querySelector('.mobileMenu');

openMenu.addEventListener('click', function () {
  overlay.classList.add('active');
  mobileMenu.classList.add('active');
})
overlay.addEventListener('click', function () {
  overlay.classList.remove('active');
  mobileMenu.classList.remove('active');
})
// acordion

let acordionBtn = Array.from(document.getElementsByClassName('acordionBtn'));

acordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('svg.arrow').classList.toggle('active');
  })
})

// swiper
var banner = new Swiper(".banner", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: true,
  loop: true,
});
var popular = new Swiper(".popular", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true, // اسلاید وسطی در مرکز باشد
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next', // دکمه بعدی
    prevEl: '.swiper-button-prev', // دکمه قبلی
  },
});
var blog = new Swiper(".blog", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true, // اسلاید وسطی در مرکز باشد
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next', // دکمه بعدی
    prevEl: '.swiper-button-prev', // دکمه قبلی
},
});
// select size

let size = Array.from(document.getElementsByClassName('size'));

size.forEach((item) => {
  item.addEventListener('click', function () {
    size.forEach((items) => { items.classList.remove('active') });
    item.classList.add('active');
  })
})

// tabs


let tabs = Array.from(document.querySelectorAll('.tabBox a'));

tabs.forEach((item) => {
  item.addEventListener('click', function () {
    tabs.forEach((items) => { items.classList.remove('active') });
    item.classList.add('active');
  })
})

// input number

let increment = Array.from(document.getElementsByClassName('increment'));
let decrement = Array.from(document.getElementsByClassName('decrement'));

increment.forEach((item) => {
  item.addEventListener('click', function () {
    item.previousElementSibling.value++;
  })
});
decrement.forEach((item) => {
  item.addEventListener('click', function () {
    if (item.nextElementSibling.value > 1) {
      item.nextElementSibling.value--;
    }
  })
});


// checkbox

let checkbox = Array.from(document.getElementsByClassName('checkbox'));
let checkboxRow = Array.from(document.getElementsByClassName('checkboxRow'));
let dateCheckbox = Array.from(document.getElementsByClassName('dateCheckbox'));

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
  checkbox.checked = false; // غیرفعال کردن حالت checked
});

checkboxRow.forEach((item) => {
  item.querySelector('input').addEventListener('click', function () {
    item.querySelector('.checkbox').classList.toggle('active');
  })
})
dateCheckbox.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
  })
})
// تنظیم مقدار ۰ برای تمام فیلدهای عددی
document.addEventListener('DOMContentLoaded', function () {
  const numberInputs = document.querySelectorAll('input[type="number"]');
  const otpInput = Array.from(document.getElementsByClassName('otpInput'));
  numberInputs.forEach(input => {
    input.value = '0';
  });
  otpInput.forEach(input2 => {
    input2.value = '';
  });
});