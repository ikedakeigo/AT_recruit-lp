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



    // アコーディオン
    // $('.js-staff-acordion').on('click', function () {
    //     $('.p-schedule-prof-message__box, .p-schedule__wrap').slideToggle();
    //     $(this).toggleClass('is-open');
    //   });


    $('.js-staff-acordion').on('click', function () {
        // クリックされたスタッフに関連する要素だけを操作
        var $currentBox = $(this).siblings('.p-schedule-prof__wrap').find('.p-schedule-prof-message__box');
        // var $currentWrap = $(this).siblings('.p-schedule-prof__wrap').find('.p-schedule__wrap');
        var $currentWrap = $('#schedule-top');

        // $currentBox と $currentWrap に slideToggle を個別に適用
        $currentBox.slideToggle();
        $currentWrap.slideToggle();
        $(this).toggleClass('is-open');


    // $currentWrap の display スタイルを切り替え
    if ($currentWrap.css('display') === 'none') {
        $currentWrap.css('display', 'flex'); // 適切なスタイルを使用
    } else {
        $currentWrap.css('display', 'none');
    }

        // .p-schedule__bg-reverseに.is-openクラスをトグル
        $('.p-schedule__bg-reverse').toggleClass('is-open');


        if ($currentWrap.css('display') === 'block') {
            $('.p-schedule__bg-reverse').addClass('is-open');
        } else {
            $('.p-schedule__bg-reverse').removeClass('is-open');
        }
    });




});
