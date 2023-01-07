from rest_framework.pagination import (
    PageNumberPagination,
    LimitOffsetPagination,
    CursorPagination
    
)

class CustomPageNumberPagination(PageNumberPagination): #! Custom class oluşturarak PageNumberPagination dan inherit ettik
    page_size = 5 #! Sayfa başına ekran da görünmesini istediğimiz API veri sayısı
    page_query_param = 'sayfa' #!  http://127.0.0.1:8000/api/student/?sayfa=2 urli custom etmek için 
class CustomLimitOffsetPagination(LimitOffsetPagination): #! Custom class oluşturarak LimitOffesitPagination dan inherit ettik
    default_limit = 10 #! Sayfa başına ekran da görünmesini istediğimiz limitlenmiş API veri sayısı
    limit_query_param = 'adet' #! http://127.0.0.1:8000/api/student/?adet=10&offset=20 limit yazısı adet'e döndü
    offset_query_param = 'baslangic'  #! http://127.0.0.1:8000/api/student/?adet=10&baslangic=10 offset yazısı baslangıc'a döndü
class CustomCursorPagination(CursorPagination): #! Custom class oluşturarak CursorPagination dan inherit ettik
    page_size = 25
    cursor_query_param = 'imlec'
    ordering = '-id'


