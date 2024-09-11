jQuery(function ($) {
  // ハンバーガーメニュー
  $(function () {
    $(".js-hamburger").click(function () {
      $(this).toggleClass("is-open");
      $(".js-drawer").toggleClass("is-open");
      $("#mask").toggleClass("is-open");

      if ($("body").css("overflow") === "hidden") {
        $("body").css({ height: "", overflow: "" });
      } else {
        $("body").css({ height: "100%", overflow: "hidden" });
      }
    });

    // ドロワーナビ
    $(".js-drawer").on("click", function () {
      $(".js-hamburger").removeClass("is-open");
      $(".js-drawer").removeClass("is-open");
      $("#mask").removeClass("is-open");

      if ($("body").css("overflow") === "hidden"){
        $("body").css({ height: "", overflow: "" });
      }
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

    // スタッフ詳細アコーディオン
    let originalScrollTop = 0; // 元のスクロール位置を記憶する変数

    $(".js-staff-acordion").on("click", function () {
        const $accordion = $(this).siblings(".p-schedule-prof__accordion");
        const $bg = $(this).closest(".p-schedule-prof__wrap").find(".p-schedule__bg");

        // ボタンのインデックスを取得
        const index = $(".js-staff-acordion").index(this);

        if ($(this).hasClass("is-open")) {
            $bg.css("height", "90%");
            // 閉じるボタンが押されたときに元の位置に戻る
            $('html, body').animate({
                scrollTop: originalScrollTop
            }, 0);
        } else {
            // 詳細ボタンを押した位置を記憶
            originalScrollTop = $(window).scrollTop();

            if (index === 0) {
                $bg.css("height", "33%");
            } else if (index === 1) {
                $bg.css("height", "28%");
            } else if (index === 2) {
                $bg.css("height", "23%");
            } else if (index === 3) {
              $bg.css("height", "31%");
            }   else if (index === 4) {
              $bg.css("height", "25%");
        }
        }

        // ボタンのテキストを動的に変更
        if ($(this).hasClass("is-open")) {
            $(this).text("詳細を見る");
        } else {
            $(this).text("閉じる");
        }

        $(this).toggleClass("is-open");

        // アコーディオンをトグル
        $accordion.slideToggle({
            duration: 500, // アニメーションの持続時間
        });
    });


    // FAQのアコーディオン
    jQuery(function ($) {
        $('.js-faq-question').on('click', function () {
            $(this).next().slideToggle();
            $(this).toggleClass('is-open');
        });
    });

    // アンカーリンクのアコーディオン
    function setAcordionBehavior() {
        if($(window).width() < 800) {
            $('#js-anckerLink').off('click').on('click', function() {
                // .sp-onlyクラスの要素にslideToggleを適用
                $('.sp-only').slideToggle().toggleClass('open');
            });
        } else{
            $('#js-anckerLink').off('click');
        }
    }

    setAcordionBehavior();

    $(window).resize(function() {
        setAcordionBehavior();
    })


      // ページトップに戻るボタンのクリックイベント
    $('.js-page-top').on('click', function () {
      $('body,html').animate(
          {
              scrollTop: 0
          },
          500
      );
      return false;
  });


  // スクロールイベントを監視
  $(window).on('scroll', function () {
      // スクロール位置が200pxを超えたらボタンを表示、それ未満なら非表示
      if ($(this).scrollTop() > 200) {
          $('.js-page-top').fadeIn();
      } else {
          $('.js-page-top').fadeOut();
      }
  });

});
