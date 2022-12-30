from django.contrib import admin
from django.urls import path,include
from .views import real_home

urlpatterns = [
    path('', real_home),
    path('admin/', admin.site.urls),
    path('api/', include('student_api.urls'))
]
