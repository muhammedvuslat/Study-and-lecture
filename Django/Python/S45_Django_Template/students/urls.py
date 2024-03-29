from django.urls import path
from .views import (
    home,
    student_list,
    student_add,
    student_update,
    student_detail,
    student_delete
    )


urlpatterns = [
    path('', home, name='home'),#! ana domainde views.py da bulunan home modülü çalışıyor
    path('list/', student_list, name='student_list'),
    path('list/', student_list, name='student_list'),
    path('add/', student_add, name='student_add'),
    path('update/<int:id>', student_update, name='student_update'),
    path('<int:id>/', student_detail, name='student_detail'),
    path('delete/<int:id>/', student_delete, name='student_delete'),
]
 