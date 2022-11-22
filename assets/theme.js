(function ($) {
    "use strict";

    if ($('.type-wrap').length) {
        $('.type-wrap').each(function () {
            var Self = $(this);
            var thmTypedDiv = Self.find('.typed');
            var typeElm = Self.find('.typed-strings');
            Self.typed({
                stringsElement: typeElm,
                typeSpeed: 200,
                backDelay: 1500,
                loop: true,
                contentType: 'html', // or text
                // defaults to false for infinite loop
                loopCount: false,
                callback: function () { null; },
                resetCallback: function () { newTyped(); }
            });
        });
    }


    if ($('.circular-progress').length) {
        $('.circular-progress').each(function () {

            var Self = $(this);
            var getID = Self.attr('id');

            const QUARTER_R = Math.PI / 2;
            const otherBall = document.getElementById(getID + '-other-ball');

            const containerWidth = document.getElementById(getID).offsetWidth;
            const strokeWidth = 3;
            const strokeColor = Self.data('color');
            const lineWidthInPixels = strokeWidth / 100 * containerWidth;
            // Radius is from circle's exact center to the middle of the line
            const radius = (containerWidth - lineWidthInPixels) / 2
            const center = (containerWidth / 2);

            var progressCount = Self.data('progress-count');
            const circle = new ProgressBar.Circle('#' + getID, {
                color: strokeColor,
                easing: 'easeInOut',
                duration: 1200,
                strokeWidth: strokeWidth,
                text: {
                    style: null,  // manually style text
                },
                step: function (state, bar) {
                    const angleR = bar.value() * 2 * Math.PI - QUARTER_R;
                    const x = radius * Math.cos(angleR) + center;
                    const y = radius * Math.sin(angleR) + center;
                    otherBall.style.left = x + 'px';
                    otherBall.style.top = y + 'px';
                }
            });

            circle.animate(progressCount);  // Number from 0.0 to 1.0	
        });

    }



    if ($('.stricky').length) {
        $('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original');
    }
    if ($('.main-navigation .navigation-box').length) {
        var subMenu = $('.main-navigation .sub-menu');
        var mainNavParentLink = $('.main-navigation .navigation-box > li > a');
        // adding active span 
        mainNavParentLink.append(function () {
            return '<span class="active-line"></span>';
        })
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
        });
        var mainNavToggler = $('.header-navigation .menu-toggler');
        var subNavToggler = $('.main-navigation .sub-nav-toggler');
        mainNavToggler.on('click', function () {
            var Self = $(this);
            var menu = Self.data('target');
            $(menu).slideToggle();
            $(menu).toggleClass('showen');
            return false;
        });
        subNavToggler.on('click', function () {
            var Self = $(this);
            Self.parent().parent().children('.sub-menu').slideToggle();
            return false;
        });
    }
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

            return false;

        });
    }
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 250, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }
    function SmoothMenuScroll() {
        var anchor = $('.scrollToLink');
        if (anchor.length) {
            anchor.children('a').bind('click', function (event) {
                if ($(window).scrollTop() > 10) {
                    var headerH = '67';
                } else {
                    var headerH = '100';
                }
                var target = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(target.attr('href')).offset().top - headerH + 'px'
                }, 1200, 'easeInOutExpo');
                anchor.removeClass('current');
                target.parent().addClass('current');
                event.preventDefault();
            });
        }
    }
    SmoothMenuScroll();

    function OnePageMenuScroll() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            var menuAnchor = $('.one-page-scroll-menu .scrollToLink').children('a');
            menuAnchor.each(function () {
                // grabing section id dynamically
                var sections = $(this).attr('href');
                $(sections).each(function () {
                    // checking is scroll bar are in section
                    if ($(this).offset().top <= windscroll + 100) {
                        // grabing the dynamic id of section
                        var Sectionid = $(sections).attr('id');
                        // removing current class from others
                        $('.one-page-scroll-menu').find('li').removeClass('current');
                        // adding current class to related navigation
                        $('.one-page-scroll-menu').find('a[href*=\\#' + Sectionid + ']').parent().addClass('current');
                    }
                });
            });
        } else {
            $('.one-page-scroll-menu li.current').removeClass('current');
            $('.one-page-scroll-menu li:first').addClass('current');
        }
    }
    if ($('.search-popup__toggler').length) {
        $('.search-popup__toggler').on('click', function (e) {
            $('.search-popup').addClass('active');
            e.preventDefault();
        });
    }

    if ($('.search-popup__overlay').length) {
        $('.search-popup__overlay').on('click', function (e) {
            $('.search-popup').removeClass('active');
            e.preventDefault();
        });
    }
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    }

    if ($('.side-menu__toggler').length) {
        $('.side-menu__toggler').on('click', function (e) {
            $('.side-menu__block').addClass('active');
            e.preventDefault();
        });
    }

    if ($('.side-menu__block-overlay').length) {
        $('.side-menu__block-overlay').on('click', function (e) {
            $('.side-menu__block').removeClass('active');
            e.preventDefault();
        });
    }

    if ($('.portfolio-one__zoom').length) {
        $('.portfolio-one__zoom').on('click', function (e) {
            $('.portfolio-popup').addClass('active');
            e.preventDefault();
        });
    }

    if ($('.portfolio-popup__overlay').length) {
        $('.portfolio-popup__overlay').on('click', function (e) {
            $('.portfolio-popup').removeClass('active');
            e.preventDefault();
        });
    }
    if ($('.contact-form-validated').length) {
        $('.contact-form-validated').validate({ // initialize the plugin
            rules: {
                fname: {
                    required: true
                },
                lname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                },
                subject: {
                    required: true
                }
            },
            submitHandler: function (form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function (response) {
                    $(form).parent().find('.result').append(response);
                    $(form).find('input[type="text"]').val('');
                    $(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                });
                return false;
            }
        });
    }
    $(window).on('scroll', function () {
        if ($('.stricked-menu').length) {
            var headerScrollPos = 100;
            var stricky = $('.stricked-menu');
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.addClass('stricky-fixed');
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass('stricky-fixed');
            }
        }
        OnePageMenuScroll();
        if ($('.scroll-to-top').length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $('.scroll-to-top').fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $('.scroll-to-top').fadeOut(500);
            }
        }

    });
    $(window).on('load', function () {
        if ($('.moveable-bg').length) {
            var movementStrength = 25;
            var height = movementStrength / $(window).height();
            var width = movementStrength / $(window).width();
            $('.moveable-bg-wrap').mousemove(function (e) {
                var pageX = e.pageX - ($(window).width() / 2);
                var pageY = e.pageY - ($(window).height() / 2);
                var newvalueX = width * pageX * -1 - 50;
                var newvalueY = height * pageY * -1 - 70;
                $('.moveable-bg').css("background-position", newvalueX + "px     " + newvalueY + "px");
            });
        }
        if ($('.service-one__carousel').length) {

            var serviceOneCarousel = $('.service-one__carousel');
            // dynamic count for carousel
            serviceOneCarousel.owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                dots: true,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    991: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
        if ($('.testimonials-one__carousel').length) {
            $('.testimonials-one__carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                dots: false,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    991: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });
        }
        if ($('.brand-one__carousel').length) {
            $('.brand-one__carousel').owlCarousel({
                loop: true,
                margin: 15,
                nav: false,
                dots: false,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    600: {
                        items: 3
                    },
                    991: {
                        items: 4
                    },
                    1000: {
                        items: 6
                    },
                    1200: {
                        items: 6
                    }
                }
            });
        }
        if ($('.custom-cursor__overlay').length) {

            // / cursor /
            var cursor = $(".custom-cursor__overlay .cursor"),
                follower = $(".custom-cursor__overlay .cursor-follower");

            var posX = 0,
                posY = 0;

            var mouseX = 0,
                mouseY = 0;

            TweenMax.to({}, 0.016, {
                repeat: -1,
                onRepeat: function () {
                    posX += (mouseX - posX) / 9;
                    posY += (mouseY - posY) / 9;

                    TweenMax.set(follower, {
                        css: {
                            left: posX - 22,
                            top: posY - 22
                        }
                    });

                    TweenMax.set(cursor, {
                        css: {
                            left: mouseX,
                            top: mouseY
                        }
                    });

                }
            });

            $(document).on("mousemove", function (e) {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                mouseX = e.pageX;
                mouseY = e.pageY - scrollTop;
            });
            $("button, a").on("mouseenter", function () {
                cursor.addClass("active");
                follower.addClass("active");
            });
            $("button, a").on("mouseleave", function () {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
            $(".custom-cursor__overlay").on("mouseenter", function () {
                cursor.addClass("close-cursor");
                follower.addClass("close-cursor");
            });
            $(".custom-cursor__overlay").on("mouseleave", function () {
                cursor.removeClass("close-cursor");
                follower.removeClass("close-cursor");
            });
        }
        if ($('.preloader').length) {
            $('.preloader').fadeOut();
        }

        if ($('.banner-carousel__one').length) {

            var myCarousel = $('.banner-carousel__one');
            var singleItem = '.banner-one__slide';
            var nextBtn = $('.banner-one__nav-left');
            var prevBtn = $('.banner-one__nav-right');

            if (myCarousel.data('carousel-in-anim') !== undefined) {
                var carouselInAnim = myCarousel.data('carousel-in-anim');
            } else {
                var carouselInAnim = 'fadeIn';
            }

            if (myCarousel.data('carousel-out-anim') !== undefined) {
                var carouselOutAnim = myCarousel.data('carousel-out-anim');
            } else {
                var carouselOutAnim = 'slideOutDown';
            }

            // dynamic count for carousel
            myCarousel.owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                dots: true,
                nav: false,
                animateOut: carouselOutAnim,
                animateIn: carouselInAnim,
                smartSpeed: 1000,
                autoplay: 5000,
                autoplayHoverPause: true
            });


            nextBtn.on('click', function () {
                myCarousel.trigger('next.owl.carousel', [300]);
                return false;
            });
            prevBtn.on('click', function () {
                myCarousel.trigger('prev.owl.carousel', [300]);
                return false;
            });


        }
        if ($('.side-menu__block-inner').length) {
            $('.side-menu__block-inner').mCustomScrollbar({
                axis: 'y',
                theme: 'dark'
            });
        }
        if ($('.portfolio-popup__inner').length) {
            $('.portfolio-popup__inner').mCustomScrollbar({
                axis: 'y',
                theme: 'dark'
            });
        }
    });

})(jQuery);