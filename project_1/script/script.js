$(window).scroll(function() {
    var offset = $(window).scrollTop();

    if (offset > 400) {
        $('.title-img').addClass('active-img');
        $('.title-img img').addClass('img-left');
        $('#title .headline').delay(1000).addClass('headline-active');
    }
    else{
        $('.title-img').removeClass('active-img');
        $('.title-img img').removeClass('img-left');
        $('#title .headline').delay(1000).removeClass('headline-active');
    }

    console.log(offset);
});
