from django.urls import path
from . import views
urlpatterns = [
    path('', views.test, name='test'),
    path('<int:id>/', views.user_detail, name='user_detail'),
    path('register/', views.userFormview, name='user_form'),     
]
