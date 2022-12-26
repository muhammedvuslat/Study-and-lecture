from django.urls import path
from .views import (
    home,
    students_list,
    students_create,
)

urlpatterns = [
    path('', home),
    path('student_list', students_list, name='list'),
    path('student_create', students_create, name='create'),
]
