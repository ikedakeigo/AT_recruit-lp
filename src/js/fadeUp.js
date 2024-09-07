jQuery(function ($) {
  function animateElements(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var parent = $(entry.target);
        var childs = parent.children();

        var time = 0.1; // 遅延時間の基本値
        var value = time;

        childs.each(function () {
          if (!$(this).hasClass("fadeUp")) {
            $(this).css("animation-delay", value + "s");
            $(this).addClass("fadeUp");
            value += time; // 遅延時間を増加させる
          }
        });

        observer.unobserve(entry.target); // 一度アニメーションが実行されたら監視を解除
      }
    });
  }

  // IntersectionObserverの設定
  var observer = new IntersectionObserver(animateElements, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // 要素が10%表示された時点でアニメーションを実行
  });

  // 各要素に対して監視をセット
  $(".delay").each(function () {
    observer.observe(this); // delayクラスを持つ要素を監視対象に
  });

  // ページが読み込まれた時にもアニメーションを適用
  $(window).on("load", function () {
    $(".delay").each(function () {
      observer.observe(this);
    });
  });
});

