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
    $(".js-staff-acordion").on("click", function () {
        const $accordion = $(this).siblings(".p-schedule-prof__accordion");
        $accordion.slideToggle();

        const $bg = $(this).closest(".p-schedule-prof__wrap").find(".p-schedule__bg");

        // ボタンのインデックスを取得
        const index = $(".js-staff-acordion").index(this);

        if ($(this).hasClass("is-open")) {
        $bg.css("height", "78%");
        } else {
        if (index === 0) {
            $bg.css("height", "33%");
        } else if (index === 1) {
            $bg.css("height", "28%");
        } else if (index === 2) {
            $bg.css("height", "35%");
        }
        }

        $(this).toggleClass("is-open");
    });


    // $('#js-anckerLink').on('click', function() {
    //     $('.sp-only').slideToggle().toggleClass('open');
    // })


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
});
