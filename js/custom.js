$(function(){
    $('.menu-link').click(function () {
        $(this).toggleClass('menu-link_active'); // для класса link присваиваем класс menu-link_active
        $('.menu').toggleClass('menu_active');

        if( $('.menu').hasClass('menu_active')){
            $('.container').css('display', 'none');
        }
        else{
            $('.container').css('display', 'block');
        }

    });
    $('.menu a').click(function () {
        $(this).toggleClass('menu-link_active');
        $('.menu').toggleClass('menu_active');
    })

    $(".right-slider-box").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });



    $('.slider-production').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
    });

    $('.block-slider-bloks').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
    });





    $('.new-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.new-slider',
        // dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
        ]
    });


    $('.contact-slider.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                dots:true,
            },
            480:{
                items:2,
            },
            768:{
                items:3,
            },
            1024:{
                items:4,
            },
        }
    });







});

