from django.db import models
from users.models import User
from editor_reviews.models import Editor_Review
from comments.models import Editor_Review_Comment, Editor_Review_Recomment

# Create your models here.


class AbstractLike(models.Model):
    user = models.ForeignKey("users.User", related_name="Likes", on_delete=models.CASCADE)

    class meta:
        abstract = True


class EditorReviewCommentLike(AbstractLike):
    comment = models.ForeignKey(
        "comments.Editor_Review_Comment",
        verbose_name="Editor_Review_Comment_Likes",
        related_name="editor_review_comment_likes",
        on_delete=models.CASCADE,
    )


class EditorReviewRecommentLike(AbstractLike):
    recomment = models.ForeignKey(
        "comments.Editor_Review_Recomment",
        verbose_name="Editor_Review_Recomment_Likes",
        related_name="editor_review_recomment_likes",
        on_delete=models.CASCADE,
    )
