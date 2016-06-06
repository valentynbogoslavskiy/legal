function call() {
    if($('#post_form input').val()!='' && $('#post_form .email').val()!=''){
        var msg   = $('#post_form').serialize();
        $.ajax({
            type: 'POST',
            url: '../post.php',
            data: msg,
            success: function(data) {
                alert('Повідомлення надіслано');
                $('#post_form input').val('');
                $('#post_form textarea').val('');
            },
            error:  function(xhr, str){
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
    }
}
$(document).ready(function() {
    $('header a[href^="#"],.banner a[href^="#"]').on('click', function(event) {
        var target = $( $(this).attr('href') );
        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        }
    });
    $('.top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    $('#consultation .box button').click(function(){
        $('html, body').animate({
            scrollTop: $("#feedback").offset().top
        }, 500);
    });
    $('header .top-logo').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    $('#advantages a[href^="#"]').on('click', function(event) {
        var target = $(this).attr('href');
        event.preventDefault();
        $('.icons a').removeClass('active');
        $(this).addClass('active');
        $('#advantages .text div').removeClass('active');
        $('#advantages .text '+target).addClass('active');
    });
    $('.close').click(function(){
        var watch=$(this).parent().data('services');
        $(this).parent().removeClass('active');
        $(this).parents('#consultation').removeClass('active');
        $('.box[data-photo="'+watch+'"]').removeClass('active');
    });
    $('.photo .box').click(function(){
        var watch=$(this).data('photo');
        $('.photo .box').removeClass('active');
        $(this).addClass('active');
        $('#consultation').addClass('active');
        $('#consultation .box').removeClass('active');
        $('.box[data-services="'+watch+'"]').addClass('active');
        $('html, body').animate({
            scrollTop: $("#consultation").offset().top
        }, 500);
    });
    $('.contact-info .street').click(function(){
        var watch=$(this).data('street');
        $('.google-map iframe').removeClass('active');
        $('.google-map iframe[data-map="'+watch+'"]').addClass('active');
        $('html, body').animate({
            scrollTop: $("#google-map").offset().top
        }, 500);
    });
    $('#post_form button').click(function(e){
        e.preventDefault();
        call();
    });
    $(window).load(function() {
        setTimeout(function() {
            $('.load').remove('.load');
        }, 600);
    });
});

