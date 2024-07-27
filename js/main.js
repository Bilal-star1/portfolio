(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 100, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
        return false;
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }





    // Facts counter
    // $('[data-toggle="counter-up"]').counterUp({
    //     delay: 10,
    //     time: 2000
    // });

    $(document).ready(function() {
        function animateCounter(counterElement, targetValue) {
            $(counterElement).animate(
                { Counter: targetValue },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    },
                    complete: function() {
                        // Wait for 3 seconds before restarting the animation
                        setTimeout(function() {
                            animateCounter(counterElement, targetValue);
                        }, 3000);
                    }
                }
            );
        }

        // Start the custom counter animation for each element with the class "counter"
        $('.counter').each(function() {
            var targetValue = $(this).data('target');
            animateCounter(this, targetValue);
        });
    });




    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });


})(jQuery);


    // CV Details

    document.addEventListener("DOMContentLoaded", function() {
        const cvs = {
          '1234': 'cvs/Resume Bilal PE.pdf',
          '5678': 'cvs/Resume Bilal PJE.pdf',
          '91011': 'cvs/Resume Bilal PM.pdf',
          '101112': 'cvs/Resume Bilal SE.pdf'
        };

        const downloadBtn = document.getElementById("downloadCvBtn");
        const submitBtn = document.getElementById("submitPin");
        const pinSection = document.getElementById("pinSection");
        const errorMessage = document.getElementById("errorMessage");

        downloadBtn.onclick = function(event) {
          event.preventDefault();
          pinSection.style.display = 'block';
        }

        submitBtn.onclick = function() {
          const pin = document.getElementById('pinInput').value;

          if (cvs[pin]) {
            errorMessage.textContent = '';
            downloadFile(cvs[pin]);

            // Hide PIN input section after successful download
            pinSection.style.display = 'none';
          } else {
            errorMessage.textContent = 'Invalid PIN. Please try again.';
          }
        }

        function downloadFile(fileUrl) {
          const link = document.createElement('a');
          link.href = fileUrl;
          link.download = '';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
    });
