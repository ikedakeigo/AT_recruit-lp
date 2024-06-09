jQuery(function ($) {
  // ハンバーガーメニュー
    $(function () {
        $(".js-hamburger").click(function () {
        $(this).toggleClass("is-open");
        $(".js-drawer").toggleClass("is-open");
        $('#mask').toggleClass('is-open');

        if ($('body').css('overflow') === 'hidden') {
            $('body').css({height: '', overflow: ''});
        }else {
            $('body').css({height: '100%', overflow: 'hidden'});
        }
        });

        // ドロワーナビ
        $(".js-drawer").on("click", function () {
        $(".js-hamburger").removeClass("is-open");
        $(".js-drawer").removeClass("is-open");
        $('#mask').removeClass('is-open');
        });

        // resizeイベント
        $(window).on("resize", function () {
        if (window.matchMedia("(min-width: 800px)").matches) {
            $(".js-hamburger").removeClass("is-open");
            $(".js-drawer").removeClass("is-open");
        }
        });

        // スクロールイベント
        $('#page-link a[href*="#"], #header-link a[href*="#"]').click(function () {
        var elmHash = $(this).attr("href"); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
        var pos = $(elmHash).offset().top; //idの上部の距離を取得
        console.log(pos);
        $("body,html").animate({ scrollTop: pos - 160 }, 100); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
        return false;
        });
    });
});
