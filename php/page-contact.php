<?php

/**
 * Template Name: お問い合わせ
 */
get_header(); ?>
<?php if (have_posts()) :
  while (have_posts()) :
    the_post();
    the_content();
  endwhile;
endif; ?>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.7.2/css/all.min.css" integrity="sha512-3M00D/rn8n+2ZVXBO9Hib0GKNpkm8MSUU/e2VNthDyBYxKWG+BftNYYcuEjXlyrSO637tidzMBXfE7sQm0INUg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<main id="contact">


  <div class="p-contact">
    <div class="p-contact-title">
      <div class="p-contact__inner">
        <h1 class="p-contact-title__heading">エントリーフォーム</h1>
        <p class="p-contact-title__text">
          採用ご希望の方は下記フォームよりお申し込みください。追って採用担当からご連絡差し上げます。<br />
          当社のプライバシーポリシーは<a href="/privacy-policy" target="_blank">こちら</a>。<br />
          <br />
          ※印がついている項目は、必須入力項目となります。
        </p>
      </div>
    </div>
    <div class="p-contact__inner">
      <div class="p-contact__wrap">
        <div class="p-contact__info">
          <p class="p-contact__guide">お電話でのお問い合わせはこちら</p>
          <p class="p-contact__tel-number">093-871-5800</p>
          <p class="p-contact__business-hours">【平日 9:00〜18:00】</p>
          <div class="p-contact__img">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/common/logo.png" alt="省略" />
          </div>
        </div>

        <?php get_template_part('template-parts/contact-item'); ?>

      </div>
    </div>
  </div>
</main>
<?php get_footer(); ?>
