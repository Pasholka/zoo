document.getElementById('toggle-switch').addEventListener('change', function() {
  let body = document.body;
  
  if (this.checked) {
    // Включить темную тему
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
  } else {
    // Включить светлую тему
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
  }
});
$(document).ready(function() {
  $('#themeToggle').change(function() {
    if ($(this).is(':checked')) {
      $('body').addClass('dark-theme');
    } else {
      $('body').removeClass('dark-theme');
    }
  });
});



window.addEventListener('load', function() {
  let preloader = document.getElementById('preloader');
  let preloaderImage = document.getElementById('preloader-image');
    preloaderImage.addEventListener('load', function() {
    setTimeout(function() {
      preloader.style.display = 'none';
      document.body.classList.add('loaded');
    }, 2000); // Задержка в 2000 миллисекунд (2 секунды)
  });

  setTimeout(function() {
    preloader.style.display = 'none';
    document.body.classList.add('loaded');
  }, 9000); // Задержка в 10000 миллисекунд (10 секунд) (в случае, если изображение не загружается)
});

document.getElementById('toggle-switch').addEventListener('change', function() {
  let logo = document.getElementById('logo');

  if (this.checked) {
    logo.src = '/assets/image/logo-header-white.svg';
    
  } else {
    logo.src = '/assets/image/logo-header.svg';
  }
});




$('.hero-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
  var totalSlides = slick.slideCount;
  var currentSlideNumber = (currentSlide ? currentSlide : 0) + 1;

  $('.current-slide').text(currentSlideNumber);
  $('.total-slides').text(totalSlides);
});

$(document).ready(function() {
  // Получаем все слайды и тексты
  var slides = document.querySelectorAll('.hero-card');
  var texts = document.querySelectorAll('.hero-card .hero-img-title');
  var donat = document.querySelectorAll('.hero-card-donat-wrap');

  // Скрываем все тексты и блоки donat
  texts.forEach(function(text) {
    text.style.display = 'none';
  });

  donat.forEach(function(d) {
    d.style.display = 'none';
  });

  // Показываем текст и блок donat на активном слайде
  function showContent(slideIndex) {
    texts.forEach(function(text, index) {
      if (index === slideIndex) {
        text.style.display = 'block';
      } else {
        text.style.display = 'none';
      }
    });

    donat.forEach(function(d, index) {
      if (index === slideIndex) {
        d.style.display = 'flex';
      } else {
        d.style.display = 'none';
      }
    });
  }

  // Инициализация слайдера
  $('.hero-slider').slick({
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1890,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1275,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          centerPadding:'100px',
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          centerPadding:'50px',
        }
      }
    ]
  }).on('afterChange', function(event, slick, currentSlide) {
    showContent(currentSlide);
  });

  showContent(0); // Показываем текст и блок donat на первом слайде при загрузке страницы
});

$('.work-slide').slick({
  // centerMode: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false
});

$(document).ready(function() {
  var $slider = $('.work-slide');
  var totalSlides = $slider.slick('getSlick').slideCount;
  $('.total-work-slides').text(totalSlides);
  
  $slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    var currentSlideNumber = (currentSlide ? currentSlide : 0) + 1;
    $('.current-work-slide').text(currentSlideNumber);
  });
});


$('.pets-slider').slick({
  // centerMode: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  // centerPadding:'30px'
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 540,
      settings: {
        arrows: false,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 360,
      settings: {
        arrows: false,
        slidesToShow: 1,
      }
    }
  ]
});
$(document).ready(function() {
  var $slider = $('.pets-slider');
  var totalSlides = $slider.slick('getSlick').slideCount;
  $('.total-pets-slides').text(totalSlides);
  
  $slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    var currentSlideNumber = (currentSlide ? currentSlide : 0) + 1;
    $('.current-pets-slide').text(currentSlideNumber);
  });
});


$('.testimonials-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      }
    },
    // {
    //   breakpoint: 1275,
    //   settings: {
    //     slidesToShow: 2,
    //   }
    // }
  ]
});

$(document).ready(function() {
  var $slider = $('.testimonials-slider');
  var totalSlides = $slider.slick('getSlick').slideCount;
  $('.total-testimonials-slides').text(totalSlides);
  
  $slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    var currentSlideNumber = (currentSlide ? currentSlide : 0) + 1;
    $('.current-testimonials-slide').text(currentSlideNumber);
  });
});

const agreementCheckbox = document.getElementById('agreementCheckbox');
const submitButton = document.getElementById('submitButton');

agreementCheckbox.addEventListener('change', function() {
  submitButton.disabled = !agreementCheckbox.checked;
});























