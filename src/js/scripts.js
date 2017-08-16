(function($, HelloWorldDevsTysonSteele) {

  // ======= Fixes =======
  HelloWorldDevsTysonSteele.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HelloWorldDevsTysonSteele.scrollToFix('#primary-menu');

  // ======= Request Appointment Form =======
  HelloWorldDevsTysonSteele.requestAppointment('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');

  // ======= Carousels =======
  HelloWorldDevsTysonSteele.marqueeCarousel({
    autoplay: 6000,
    effect: 'fade',
    speed: 500
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-tour-carousel', {
    autoplay: true,
    autoplayTimeout: 10000,
    items: 1,
    margin: 40,
    navText: [
      '<img src="assets/tour-left.png">',
      '<img src="assets/tour-right.png">'
    ],
    autoHeight: true
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-services-carousel', {
    items: 1,
    margin: 40,
    nav: false,
    autoHeight: true,
    dots: true
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-services-carousel--two', {
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause:false,
    autoWidth: false,
    nav: false,
    dots: false,
    margin: 30,
    slideBy: 1,
    responsive: {
      550: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 3
      }
    }
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-services-carousel--two-mobile', {
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause:false,
    autoWidth: false,
    nav: false,
    dots: false,
    margin: 30,
    slideBy: 1,
    responsive: {
      550: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
  HelloWorldDevsTysonSteele.associationCarousel('.js-associations-carousel', {
    items: 2,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause:false,
    autoWidth: false,
    nav: false,
    dots: false,
    margin: 0,
    slideBy: 1,
    responsive: {
      550: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5,
        autoplay: false
      }
    }
  });
  HelloWorldDevsTysonSteele.pyramidCarousel('.js-smile-carousel', {
    items: 2,
    autoplay: true,
    navText: [
      '<img src="assets/left-arrow.png">',
      '<img src="assets/right-arrow.png">'
    ],
    responsive: {
      550: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      },
      1200: {
        items: 6
      }
    },
    margin: 30
  });
  HelloWorldDevsTysonSteele.updateCopyright('.js-copyright-year');

  // ======= Google Maps =======
  HelloWorldDevsTysonSteele.googleMap('#google-map5', '37.039987,-88.660107', '37.039987,-88.660107');

  $('[data-lightboxpointer^="#thumb"]').each(function(index, element) {
    $(element).click(function(e) {
      e.preventDefault();
      var target = $(this).attr('data-lightboxpointer');
      $(target).click();
    });
  });

  $('#modal--implant').on('hidden.bs.modal', function() {
    var $movie = $('#movie');
    var parent = $movie.parent();

    parent.empty().append($movie);
  });

  $('.video-queue img').each(function(index, element) {
    $(element).click(function(e) {
      e.preventDefault();

      $('.video-queue>div').each(function(index, element) {
        $(element).removeClass('active');
      });

      $(this).parent().toggleClass('active');

      var newSrc = $(this).attr('data-youtube-embed');
      $('#active-video').attr('src', newSrc);
    });
  });

  HelloWorldDevsTysonSteele.stopVideoModal('#modal--sedation', '#sedation-video')



}(jQuery, HelloWorldDevsTysonSteele));