

$(document).ready(function(){

  $(".button-collapse").sideNav();

    // Open Img Box
    $(".open-box").click(function () {
        $(this).parent().parent().next().fadeIn(1,function(){
            $(this).addClass('animated bounceIn')
        });
    });
    // Close Img Box
    $(".fa-close").click(function(){
        $(".pop-box").fadeOut(1, function () {
            $(this).removeClass('animated bounceIn')
        });
    });

    //* Clients_Carosel
    function Clients_Cxarosel() {
        if ($('.clients-items').length) {
            $('.clients-items').owlCarousel({
                loop: true,
                items: 3,
                margin: 10,
                autoplay: true,
                response: true,
                responsive: {
                    300: {
                        items: 1,
                        margin: 0,
                    },
                    500: {
                        items: 1,
                    },
                    700: {
                        items: 2,
                    },
                    800: {
                        items: 3,
                        margin: 40,
                    },
                    1000: {
                        items: 3,
                    },
                }
            });
        };
    };
    // end Clients_Carosel


    // Start SEARCH POP UP
    $(function () {
        $('a[href="#search"]').on("click", function (event) {
            event.preventDefault();
            $("#search").addClass("open");
            $('#search > form > input[type="search"]').focus();
        });

        $("#search").on("click keyup", function (event) {
            if (
                event.target == this ||
                event.className == "close" ||
                event.keyCode == 27
            ) {
                $(this).removeClass("open");
            }
        });

        $("form").submit(function (event) {
            event.preventDefault();
            return false;
        });
    });
    // End SEARCH POP UP

    // Start Intro__Video POP UP
    $('a[href="#Intro__Video"]').click(function () {
        $(".video__overlay").addClass("open");
    });

    $(".video__close").click(function (event) {
        event.preventDefault();
        $(".video__overlay").removeClass("open");
        
    });
    // End Intro__Video POP UP

});


// button scrollToTop

$(document).ready(function(){

    $(window).scroll(function(){
    if ($(this).scrollTop() > 1000) {
        $('#scrollToTop').fadeIn();
    } else {
        $('#scrollToTop').fadeOut();
    }

    });

    $('#scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
    });

});

// go down
function goToByScroll(id){ $('html,body').animate({scrollTop: $(id).offset().top},'slow'); }

$(document).ready(function(){ 
    $('a:link').click(function(){ 
    goToByScroll($(this).attr('href')); 
    return false;
     });
 }); 

new WOW().init();


$(window).scroll(function () {

    // Add Class "NavbarFixed" on Navbar
    if ($(this).scrollTop() > 500) {

        $('nav').addClass('NavbarFixed');

    } else { $('nav').removeClass('NavbarFixed'); }
					
});

$(document).ready(function ($) {

    // timer-counter Start
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    // timer-counter End

    // MixitUp Start
    $(function () {

        $('#Container').mixItUp(

            {
                animation: {
                    duration: 560,
                    effects: 'fade rotateZ(115deg) rotateX(-104deg) translateZ(280px) scale(1.14)',
                    easing: 'cubic-bezier(0.47, 0, 0.745, 0.715)'
                }
            }

        );
    });
    // MixitUp End
});