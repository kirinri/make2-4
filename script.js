$(function(){

    $('.login').click(function(){
        $('.login-modal').fadeIn();

    })

    $('.register').click(function(){
        $('.register-modal').fadeIn();

    })

    $('.close-modal').click(function(){
        $('.modal-wrapper').fadeOut();
    })

    $('.lesson-top').click(function(){
        $('html,body').animate({'scrollTop':$('#lesson-view').offset().top},500);
    })




    // クラスを付与し、表示非表示を管理
    $('.faqlist-item').click(function(){
        var $answer = $(this).find('.ans');
        if ($answer.hasClass('open')){
            $answer.removeClass('open');
            $answer.slideUp();
            $(this).find('span').text('+');

        } else {
            $answer.addClass('open');
            $answer.slideDown();
            $(this).find('span').text('-');
        }


    });


    




    // $('.lesson').hover(
    //     function(){
    //         $(this).find('.lesson-text').show();
    //     },
    //     function(){
    //         $('.lesson-text').hide();
    //     });
















});