


// side navbar ========================================

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



/*project_image_animation*/

let el = document.getElementById('projectimages_left')
const height = el.clientHeight
const width = el.clientWidth
el.addEventListener('mousemove', handleMove)

function handleMove(e) {
  const xVal = e.layerX
  const yVal = e.layerY
  const yRotation = 20 * ((xVal - width / 2) / width)
  const xRotation = -20 * ((yVal - height / 2) / height)

  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  el.style.transform = string
}
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})



/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})




/*projects_text_animation*/

const pera = document.querySelectorAll('.pera');
const all_box = document.querySelectorAll('.box');
const left_arrow = document.getElementById('left');
const right_arrow = document.getElementById('right');
let current = 0;

function slideAnimation() {
  all_box.forEach(box => box.style.display = 'none');

  function slideTiming() {
    setTimeout(() => {
      all_box[current].style.display = 'block';
      pera.forEach(p => p.classList.add('txt-animate'));
      console.log('current from first slide before increase : ' + current);
      current++;
      console.log('current from first slide after increase : ' + current);
    }, 0);
    setTimeout(() => {
      all_box[current - 1].style.display = 'none';
      all_box[current].style.display = 'block';
      pera.forEach(p => p.classList.add('txt-animate'));
      console.log('current from second slide before increase : ' + current);
      current++;
      console.log('current from second slide after increase : ' + current);
    }, 5500);
    setTimeout(() => {
      all_box[current - 1].style.display = 'none';
      all_box[current].style.display = 'block';
      pera.forEach(p => p.classList.add('txt-animate'));
      console.log('current from third slide before increase : ' + current);
      current++;
      console.log('current from third slide after increase : ' + current);
    }, 11000);
    current = 0;
    all_box.forEach(box => box.style.display = 'none');
  }
  setInterval(slideTiming, 16500);
  slideTiming();
}
slideAnimation();



/*services_vertical_slider*/

var slickCarousel = $('.slider-vertical');
slickCarousel.slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  vertical: true,
  verticalSwiping: true,
  dots: false,
  centerPadding: '50px',
  arrows: true,
  prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0"  role="button"><img class="service_up" src="images/service_up.png"></button>',
  nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><img class="service_down" src="images/service_down.png"></button>',
  responsive: [{
    breakpoint: 1300,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: false,
    }
  }, {
    breakpoint: 580,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      vertical: true,
      verticalSwiping: true,
        infinite: false,
    }
  }]
});




/*services_clickchange*/
$(document).on('click', '.map-point-sm', function() {
  var show = $(this).data('show');
  $(show).removeClass("hide").siblings().addClass("hide");
  setTimeout(function() {
    document.getElementById('test').className = 'slideDown';
  }, 500);
});


/*testimonial_slider*/
$(document).ready(function() {
  $('.slider_2').slick({
    dots: false, // Add Dots to Bottom of Slide
    autoplay: true, // Makes Slide Auto-Slide
    autoplaySpeed: 1500, // Controls Speed of Autoplay Slides
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

/*products_slider*/
$(document).ready(function() {
  $('.customer-logos').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<img class="service_left" src="images/productleft.png">',
    nextArrow: '<img class="service_right" src="images/productright.png">',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    },{
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
    }]
  });
});
