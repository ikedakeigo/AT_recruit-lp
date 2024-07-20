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
