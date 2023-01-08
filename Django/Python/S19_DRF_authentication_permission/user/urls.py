from django.urls import path
from .views import RegisterView
from rest_framework.authtoken import views #! obtain_token için import

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', views.obtain_auth_token) #! kullanıcı username ve password işlemlerini bu endpoint te post ettiğinde obtain_auth_token otomatik bir token dönecek ve bu token aynı zamanda database de kayıt olacak postman>post>http://127.0.0.1:8000/user/login/  post işlemini yaptığımızda admin panelde ki token tablosunda ilgili kullanıcı için token oluştuğunu görebiliriz.

]
