jQuery(function ($) {
  function delayScrollAnime() {
    var time = 0.1; // 遅延時間を増やす秒数の値
    var value = time;
    $(".delay").each(function () {
      var parent = this; // 親要素を取得
      var elemPos = $(this).offset().top; // 要素の位置まで来たら
      var scroll = $(window).scrollTop(); // スクロール値を取得
      var windowHeight = $(window).height(); // 画面の高さを取得
      var childs = $(this).children(); // 子要素を取得

      // スクロールが要素の位置に達したか、またはそれを超えたかチェック
      // かつ、スクロールが要素の下端よりも上にあるかチェック（要素が完全にビューポートから消えたらアニメーションを停止）
      if (
        scroll >= elemPos - windowHeight &&
        scroll <= elemPos + $(parent).outerHeight() &&
        !$(parent).hasClass("play")
      ) {
        $(childs).each(function () {
          if (!$(this).hasClass("fadeUp")) {
            $(parent).addClass("play"); // 親要素にクラス名playを追加
            $(this).css("animation-delay", value + "s"); // アニメーション遅延のCSS animation-delayを追加
            $(this).addClass("fadeUp"); // アニメーションのクラス名を追加
            value = value + time; // delay時間を増加させる

            var index = $(childs).index(this);
            if (childs.length - 1 == index) {
              $(parent).removeClass("play");
            }
          }
        });
      }
    });
  }
  // 画面をスクロールをしたら動かしたい場合の記述
  jQuery(window).scroll(function () {
    delayScrollAnime(); /* アニメーション用の関数を呼ぶ*/
  }); // ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  jQuery(window).on("load", function () {
    delayScrollAnime(); /* アニメーション用の関数を呼ぶ*/
  }); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述
});

window.onload = function () {
  var element = document.querySelector('[data-title="Value"]');
  if (element && element.getAttribute("data-title") === "Value") {
    element.classList.add("value-title");
  }
  console.log(element);

  const worksElement = document.querySelector(".p-work__wrap");
  const targetElement = document.querySelector(".p-work__bg");
  const matchMedia = window.matchMedia("(min-width: 800px)");

  let resizeObserver;

  const handleResize = () => {
    if (matchMedia.matches) {
      if (!resizeObserver) {
        const resizeObserver = new ResizeObserver((entries) => {
          for (let entry of entries) {
            const worksHeight = entry.target.offsetHeight;
            console.log(worksHeight);
            targetElement.style.height = worksHeight + 50 + "px";
          }
        });
        resizeObserver.observe(worksElement);
      }
    } else {
      if (resizeObserver) {
        resizeObserver.unobserve(worksElement);
        resizeObserver = null;
      }
      targetElement.style.height = "";
    }
  };

  // 初期をチェック
  handleResize();
  matchMedia.addEventListener("change", handleResize);

  const scheduleElement = document.getElementById("schedule-top");
  const targetElements = document.querySelectorAll(".p-schedule__bg, .p-schedule__bg-reverse");

  if (scheduleElement) {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const scheduleHeight = entry.target.offsetHeight;
        console.log(scheduleHeight);
        targetElements.forEach((element) => {
          element.style.height = scheduleHeight + "px";
        });
      }
    });
    resizeObserver.observe(scheduleElement);
  }

  // const guidelinenElement = document.querySelector(".p-guidelines__wrap");
  // const targetElements3 = document.querySelectorAll(".p-guidelines__bg, .p-schedule__bg-reverse");

  // if (guidelinenElement) {
  //   const resizeObserver = new ResizeObserver((entries) => {
  //     for (let entry of entries) {
  //       const guidelineHeight = entry.target.offsetHeight;
  //       console.log(guidelineHeight);
  //       targetElements3.forEach((element) => {
  //         element.style.height = guidelineHeight + "px";
  //       });
  //     }
  //   });

  //   resizeObserver.observe(guidelinenElement);
  // }

};

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
});
