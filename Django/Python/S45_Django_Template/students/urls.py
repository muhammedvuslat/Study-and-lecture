from django.urls import path
from .views import home

urlpatterns = [
    path('', home, name='home'),#! ana domainde views.py da bulunan home modülü çalışıyor
]
