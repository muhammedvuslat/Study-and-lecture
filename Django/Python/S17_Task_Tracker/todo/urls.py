from django.urls import path, include

#! Framework İmports
from rest_framework import routers

#! My import
from .views import( 
    # FBV (Function Based View)
    # todo_list_create,
    todo_home,
    # todo_detail,
    #CBV (Class Based View)
    Todos,
    TodoDetail,
    #Viewset (ModelViewSet)
    TodoMVS,
    )

router = routers.DefaultRouter() #! Router değişkenine routers.DefaultRouter() class tanımlamasını yapıyoruz
router.register('todo',TodoMVS) #! end point oluşturulduktan sonra aşağıda include ile tanımlama yapılması gerekir.

urlpatterns = [
    path("",todo_home ),
    # path('list-create/',todo_list_create),
    # path('detail/<int:id>',todo_detail) #! Views da id olarak tanımladığımız için id int:id yazarız pk olarak değil ne olarak tanımlarnırsa o şekilde belirtilir
    # path('list-create/',Todos.as_view()),
    # path('detail/<int:pk>',TodoDetail.as_view()) #! FrameWorkün otomatik tanımlamasında id yerine pk kullanıldığından dolayı pk kullandık. İlgili classın altına | lookup_field = 'id' | yazmamız durumda endpoint de de id kullanabiliriz
    path('',include(router.urls)) #! Oluşturduğumuz router değişkeninin .urls ile framework otomatik rotalar oluşturur cmd+DefaultRouter() ile urls kontrol et




]
