'use strict';
{
    $(function() {
        // menu
        $('.toggleBtn').on('click', function() {
            $(this).toggleClass('open');
            $('.nav').toggleClass('open');
        });


        // scroll amime
        let justLoaded = true;

        $(window).on('load', function() {
            setTimeout(function() {
                justLoaded = false;
            }, 300);
        });

        let done1 = false;
        let done2 = false;

        $(window).on('scroll', function() {
            if (justLoaded) return;
            if (done1) return;

            const triggerTop1 = $('.triggerArea1').offset().top -100;
            const scroll = $(window).scrollTop();
            const winH = $(window).height();
            
            if (scroll > triggerTop1 - winH + 100) {
                done1 = true;
                
                const nextPos = $('.triggerArea1').offset().top;
                
                $('html, body').animate({
                    scrollTop: nextPos
                }, 600);
            }
        });
        
        $(window).on('scroll', function() {
            if (justLoaded) return; 
            if (done2) return;

            const triggerTop2 = $('.triggerArea2').offset().top -100;
            const scroll = $(window).scrollTop();
            const winH = $(window).height();

            if (scroll > triggerTop2 - winH + 100) {
                done2 = true;

                const nextPos = $('.triggerArea2').offset().top;

                $('html, body').animate({
                    scrollTop: nextPos
                }, 600);
            }
        });
    });
};