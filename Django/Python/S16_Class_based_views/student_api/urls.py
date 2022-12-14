from django.urls import path,include
from rest_framework import routers
from .views import (

    #! Function Based Views
    home,
    # students_list,
    # student_create,
    # student_detail,
    # student_update,
    # student_delete,
    # student_api,
    # student_api_get_update_delete

    #! Class Based Views
    #? APIVIEW
    # StudentListCreate,
    # StudentDetail,
    #? GENERİCAPI View
    # StudentGAV,
    # StudentDetailGAV,
    #? Concrete View 
    # StudentCV,
    # StudentDetailCV,
    #? ViewSets
    StudentMVS,
    PathMVS


) 
#! ViewSets
router = routers.DefaultRouter()
router.register("student",StudentMVS)
router.register("path", PathMVS)


urlpatterns = [
    #!Function Based Views
    path("", home),
    # path("student-list/", students_list, name='list'),
    # path("student-create/", student_create, name='create'),
    # path("student-detail/<int:pk>/", student_detail, name='detail'),
    # path("student-update/<int:pk>/", student_update, name='update'),
    # path("student-delete/<int:pk>/", student_delete, name='delete'),
    # path('student/', student_api),
    # path('student/<int:pk>', student_api_get_update_delete)
    #!Class Based Views(API View)
    # path('student/', StudentListCreate.as_view()),
    # path('student/<int:pk>', StudentDetail.as_view())
    #!Class Based Views(GenericAPI View)
    # path('student/', StudentGAV.as_view()),
    # path('student/<int:pk>', StudentDetailGAV.as_view())
    #!Class Based Views(Concrete View)
    # path('student/', StudentCV.as_view()),
    # path('student/<int:pk>', StudentDetailCV.as_view())
    path("",include(router.urls))



]
