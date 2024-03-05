const slider = document.querySelector('.js-next');
const slides = slider.querySelectorAll('.js-next .slide');
var initial;

const slideCount = slides.length;
let activeSlide = 0;

if (!($(slides).hasClass('-visible')))
  slides[activeSlide].classList.add('-visible');

  for  (let i = 0; i < slides.length; i++)
  $(slides[i].firstElementChild).attr('style', 'width:' + $(window).width() + 'px; height:' + $(window).height() + 'px');


function SlidePhoto()
  {  
    slides[activeSlide].classList.remove('-visible');
    activeSlide++;
    if (activeSlide === slideCount) 
      activeSlide = 0;
    slides[activeSlide].classList.add('-visible');
  }

  function SlidePhotoTimeOut()
    {
      initial = setInterval(() => SlidePhoto(), 5000);
    }

  SlidePhotoTimeOut()
$(document).mouseup( function(e)
  {
    var header = $(".splash-header");
    var footer = $(".cover-bottom");

    if (!header.is(e.target) && header.has(e.target).length === 0 && !footer.is(e.target) && footer.has(e.target).length === 0)
      {
        SlidePhoto();
        clearInterval( initial )
        initial = setInterval(() => SlidePhoto(), 5000);
      }
  });

var width = window.innerWidth;
var height = window.innerHeight;

$( window ).resize(function()
  {
    for  (let i = 0; i < slides.length; i++)
      $(slides[i].firstElementChild).attr('style', 'width:' + $(window).width() + 'px; height:' + $(window).height() + 'px');
  });