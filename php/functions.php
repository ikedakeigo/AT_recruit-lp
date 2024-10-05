<?php

// Contact Form 7で自動挿入されるPタグ、brタグを削除
add_filter('wpcf7_autop_or_not', 'wpcf7_autop_return_false');
function wpcf7_autop_return_false() {
  return false;
}

add_filter('flamingo_subject', 'custom_flamingo_subject', 10, 2);

function custom_flamingo_subject($subject, $submission) {
    // textarea フィールドの値を取得（'textarea-92'はフォーム内のフィールド名）
    $textarea = $submission->get_posted_data('textarea-92');

    // textarea が空の場合、件名を「採用ページより」に変更
    if (empty($textarea)) {
        $subject = '採用ページより';
    } else {
        // textarea が空でない場合、文字数を30文字以内に制限し、長ければ「...」を追加
        $subject = mb_substr($textarea, 0, 30) . (mb_strlen($textarea) > 30 ? '...' : '');
    }

    return $subject;
}

?>
