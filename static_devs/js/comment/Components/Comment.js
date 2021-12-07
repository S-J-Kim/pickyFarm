"use strict";

var commentComponent = function commentComponent(props) {
  return "\n    <div class=\"comment\" name=".concat(props.pk, ">\n        <div class=\"comment-info flex items-center\">\n            <div class=\"comment-author flex items-center\">\n                <img src=\"").concat(props.profile_image, "\" class=\"comment-author--profile-image\">\n                <div class=\"comment-author--id\">").concat(props.author, "</div>\n            </div>\n            <div class=\"bar\"></div>\n            <div class=\"comment-create text-center\">").concat(props.create_at, "</div>\n            <div class=\"bar\"></div>\n            <div class=\"comment-report flex items-center ml-auto\">\n                <img src=\"").concat(reportButtonImageURL, "\" alt=\"\">\n                <div class=\"comment-report--report button\">\uC2E0\uACE0\uD558\uAE30</div>\n            </div>\n        </div>\n        <div class=\"comment-content relative\">\n            <div class=\"comment-text\">\n                <div class=\"comment-text--text\">").concat(props.text, "</div>\n                <div class=\"comment-text-options text-right flex justify-between\">\n                    <div onclick=\"expandRecommentSection(this)\" class=\"button comment-text-options--recomment\">\uB2F5\uAE00 ").concat(props.recomment_count ? props.recomment_count : 0, "\uAC1C</div>\n                    <div class=\"flex\">\n                        <div class=\"comment-text-options--edit button\" onclick=commentEdit(this,").concat(props.pk, ")>\uC218\uC815\n                        </div>\n                        <div class=\"comment-text-options--delete button\" onclick=commentDelete(").concat(props.pk, ")>\uC0AD\uC81C</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"absolute comment-like-button-wrap button\">\n                <div class=\"comment-like-button relative\"\n                    style=\"background-image: url(").concat(likeButtonImageURL, ");\">\n                    <p class=\"comment-like-count absolute text-center align-text-bottom\">").concat(props.like_count ? props.like_count : 0, "</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"recomment-wrap\" name=\"").concat(props.pk, "\">\n            <div class=\"recomment-input-wrapper flex flex-col\">\n                <div class=\"flex items-center recomment-info\">\n                    <div class=\"recomment-arrow\"></div>\n                    <div class=\"recomment-author flex items-center\">\n                        <img src=\"").concat(currentUserProfileImageURL, "\" class=\"comment-author--profile-image\">\n                        <div class=\"comment-author--id\">").concat(currentUserNickname, "</div>\n                    </div>\n                </div>\n                <textarea type=\"text\" class=\"recomment-input-box\" name='").concat(props.pk, "'></textarea>\n                <button class=\"recomment-submit-button mx-auto\"\n                    onclick=\"recommentSubmit(").concat(props.pk, ")\">\uB4F1\uB85D\uD558\uAE30</button>\n            </div>\n            <div class=\"horizon-bar mx-auto\"></div>\n            <button onclick=\"recommentLoad(").concat(props.pk, ")\" class=\"recomment-load-button\">\uBD88\uB7EC\uC624\uAE30</button>\n        </div>\n    </div>");
};

var recommentComponent = function recommentComponent(props) {
  console.log(props);
  return "\n    <div class=\"recomment relative\" name=\"".concat(props.pk, "\">\n        <div class=\"flex items-center recomment-info\">\n            <div class=\"recomment-arrow\"></div>\n            <div class=\"recomment-author flex items-center\">\n                <img src=\"").concat(props.profile_image, "\" class=\"comment-author--profile-image\">\n                <div class=\"comment-author--id\">").concat(props.author, "</div>\n            </div>\n            <div class=\"bar\"></div>\n            <div class=\"comment-create text-center recomment-create\">\n                ").concat(props.create_at, "\n            </div>\n            <div class=\"bar\"></div>\n            <div class=\"recomment-report flex items-center ml-auto\">\n                <img src=\"").concat(reportButtonImageURL, "\"\n                    alt=\"\">\n                <div class=\"comment-report--report button\">\uC2E0\uACE0\uD558\uAE30</div>\n            </div>\n        </div>\n        <div class=\"absolute recomment-like-button-wrap button\">\n            <div class=\"recomment-like-button relative\"\n                style=\"background-image: url(").concat(recommentLikeButtonImageURL, ");\">\n                <p class=\"recomment-like-count absolute text-center align-text-bottom\">").concat(props.like_count ? props.like_count : 0, "</p>\n            </div>\n        </div>\n        <div class=\"recomment-content\">\n            <div class=\"recomment-text\">\n                <div class=\"recomment-text--text\">").concat(props.text, "</div>\n                <div class=\"recomment-text-options-wrap flex justify-between\">\n                    <div></div>\n                    <div class=\"recomment-text-options flex\">\n                        <div class=\"recomment-text-options--edit button comment-text-options--edit\"  onclick=\"recommentEdit(this, ").concat(props.pk, ")\">\uC218\uC815</div>\n                        <div class=\"recomment-text-options--delete button comment-text-options--delete\" onclick=\"recommentDelete(").concat(props.pk, ")\">\uC0AD\uC81C</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"horizon-bar mx-auto\"></div>");
};