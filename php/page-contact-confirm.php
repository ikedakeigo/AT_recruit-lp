<?php

/**
 * Template Name: お問い合わせ確認
 */
get_header(); ?>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.7.2/css/all.min.css" integrity="sha512-3M00D/rn8n+2ZVXBO9Hib0GKNpkm8MSUU/e2VNthDyBYxKWG+BftNYYcuEjXlyrSO637tidzMBXfE7sQm0INUg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<main>

  <div class="p-contact confirm">
    <div class="p-contact-title">
      <div class="p-contact__inner">
        <h1 class="p-contact-title__heading">エントリーフォーム</h1>
        <p class="p-contact-title__text">
          採用ご希望の方は<br class="sp-only">下記フォームよりお申し込みください。<br class="sp-only">追って採用担当からご連絡差し上げます。<br />
          当社のプライバシーポリシーは<a href="/privacy-policy" target="_blank">こちら</a>。<br />
          <br />
          ※印がついている項目は、<br class="sp-only">必須入力項目となります。
        </p>
      </div>
    </div>
    <div class="p-contact__inner">
      <div class="p-contact__wrap">

        <?php get_template_part('template-parts/contact-confirm-item') ?>
      </div>
    </div>
  </div>

</main>

<?php get_footer(); ?>
