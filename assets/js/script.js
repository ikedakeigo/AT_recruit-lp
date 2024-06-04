jQuery(function ($) { // $はjQueryを表す
    // この中にコードを書く

    // 例：クラスがc-btnのcolorを黒色にする
    // $(".c-btn").css("color","black")

    // 例：idがbuttonのテキストを変更
    // $("#button").text("ボタンのテキストを変更");

    // 例：クラスがc-btnをクリックした場合、コンソールログを出力
    // $(".c-btn").click(function() {
    //     console.log("ボタンがクリックされました！");
    // });

    // ハンバーガーメニュー
    $(function() {
        $(".js-hamburger").click(function() {
            $(this).toggleClass('is-open');
            $(".js-drawer").toggleClass('is-open');
        });

        // ドロワーナビ
        $(".js-drawer a[href]").on("click", function () {
            $(".js-hamburger").removeClass('is-open');
            $('.js-drawer').removeClass('is-open');
        });

        // resizeイベント
        $(window).on('resize', function() {
            if(window.matchMedia("(min-width: 768px)").matches) {
                $(".js-hamburger").removeClass('is-open');
                $('.js-drawer').removeClass('is-open');
            }
        })
    })
});
