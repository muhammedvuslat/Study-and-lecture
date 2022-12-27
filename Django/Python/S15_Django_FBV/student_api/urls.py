from django.urls import path
from .views import (
    home,
    # students_list,
    # student_create,
    # student_detail,
    # student_update,
    # student_delete,
    student_api,
    student_api_get_update_delete,

)

urlpatterns = [
    path('', home),
    #     path('student_list', students_list, name='list'),
    #     path('student_create', student_create, name='create'),
    #     # <int:id> Tarayıcıda yada api de url sonuna girilen id numarası yakalanır views a gönderilir
    #     path('student_detail/<int:id>', student_detail, name='detail'),
    #     path('student_update/<int:id>', student_update, name='detail'),
    #     path('student_delete/<int:id>', student_delete, name='delete'),
    path('student/', student_api),
    path('student/<int:pk>', student_api_get_update_delete),

]
