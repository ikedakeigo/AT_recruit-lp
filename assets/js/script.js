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
  const targetElement2 = document.querySelector(".p-schedule__bg");

  if (scheduleElement) {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const scheduleHeight = entry.target.offsetHeight;
        console.log(scheduleHeight);
        targetElement2.style.height = scheduleHeight + "px";
      }
    });
    resizeObserver.observe(scheduleElement);
  }

  const guidelinenElement = document.querySelector(".p-guidelines__wrap");
  const targetElement3 = document.querySelector(".p-guidelines__bg");

  if (guidelinenElement) {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const guidelineHeight = entry.target.offsetHeight;
        console.log(guidelineHeight);
        targetElement3.style.height = guidelineHeight + "px";
      }
    });

    resizeObserver.observe(guidelinenElement);
  }
};

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
