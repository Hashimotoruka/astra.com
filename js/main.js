$(function () {
    var duration = 300;
    $('.dropdown').hide();

    $('.course_item').on('click', function () {

        const $dropdown = $(this).find('.dropdown');

        $('.course_item').not($(this)).removeClass('open').find('.dropdown').slideUp();

        $(this).toggleClass('open');
        $dropdown.stop(true, true).slideToggle(300);

    });
    $('.accordion-header').click(function () { // .accordion-headerをクリックで発火
        $(this).next().slideToggle();
        // $(this)...$('.accordion-header')の.next()...次の要素が.slideToggle()...表示と非表示を交互にする
        $(this).toggleClass('active');
        // $(this)...$('.accordion-header')に、activeというクラスが追加と削除を交互にする
    });



    // 最初の画像表示
    $(".slide li:first").show();

    // スライド切替
    setInterval(function () {
        $(".slide li:first")
            .fadeOut(1000)
            .next("li")
            .fadeIn(1000)
            .end()
            .appendTo(".slide");
    }, 4000);

    // クリックでフェードアウト（トップが見える）
    $("#opening").on("click", function () {
        $(this).fadeOut(1500);
    });
    if (!sessionStorage.getItem("openingPlayed")) {

        sessionStorage.setItem("openingPlayed", "true");

        setTimeout(function () {
            $('.start p').fadeIn(1000);
        }, 350);

        setTimeout(function () {
            $('.start').fadeOut(500);
        }, 4800);

    } else {
        $('.start').hide();
    }


const headerMove = $('.sticky');
$(window).on('load scroll', function () {
    // $('.sticky_ul').hide();
    if ($(this).scrollTop() > 300 && headerMove.hasClass('isFixed') == false) {
        headerMove.css('display', 'block');
        headerMove.css({ 'top': '-80px' });
        headerMove.addClass('isFixed');
        headerMove.animate({ 'top': 0 }, 700);
    }

    else if ($(this).scrollTop() < 300 && headerMove.hasClass('isFixed') == true) {
        headerMove.removeClass('isFixed');
        headerMove.css('display', 'none');
    }
});
setTimeout(function () {
    $('.fade-up').addClass('is-done');
}, 5000);
});










