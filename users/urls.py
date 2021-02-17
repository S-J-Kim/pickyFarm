from django.urls import path
from django.conf.urls import url, include
from django.contrib.auth import views as auth_views
from django.urls import reverse_lazy
from . import views

app_name = "users"

urlpatterns = [
    path('login/', views.Login.as_view(), name='login'),
    path('logout/', views.log_out, name='logout'),
    path('signup/', views.SignUp.as_view(), name='signup'),
    path('signup/id_validation/', views.idValidation, name='id_validation'),
    path('signup/nickname_validation/', views.nicknameValidation, name='nickname_validation'),
    path('signup/email_validation/', views.emailValidation, name='email_validation'),
    path('farmers_page/', views.farmers_page, name='farmers_page'),
    path('farmers_page/farmer_search/', views.farmer_search, name='farmer_search'),
    path('farmers_page/farmer_story_search/', views.farmer_story_search, name='farmer_story_search'),
    path('farmers_page/farm_cat_search/', views.farm_cat_search, name='farm_cat_search'),
    path('farmer_detail/<int:pk>/', views.farmer_detail, name='farmer_detail'),
    path('cart_in/<int:product_pk>/', views.cart_in, name="cart_in"),
    path('wish/<int:product_pk>/', views.wish, name='wish'),
    path('password_reset/', views.MyPasswordResetView.as_view(), name='password_reset'),
    path('password_reset/done/', views.MyPasswordResetDoneView.as_view(), name='password_reset_done'),
    path('password_reset/<uidb64>/<token>/', views.MyPasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('reset/done/', views.MyPasswordResetCompleteView.as_view(), name='password_reset_complete'),
    path('mypage/<slug:cat>', views.mypage, name='mypage'),
    path('mypage/cartIn/', views.CartInAjax, name="cartInAjax"),
    path('find_my_id/', views.FindMyIdView.as_view(), name='find_my_id'),
    path('find_my_id/complete', views.FindMyIdView.as_view(), name='find_my_id_complete'),
    path('find_my_id/failed', views.FindMyIdFailView.as_view(), name='find_my_id_failed'),
]