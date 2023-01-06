from rest_framework.pagination import (
    PageNumberPagination,
    LimitOffsetPagination
    
)

class CustomPageNumberPagination(PageNumberPagination): #! Custom class oluşturarak PageNumberPagination dan inherit ettik
    page_size = 100 #! Sayfa başına ekran da görünmesini istediğimiz API veri sayısı
    page_query_param = 'sayfa' #!  http://127.0.0.1:8000/api/student/?sayfa=2 urli custom etmek için 
class CustomLimitOffsetPagination(LimitOffsetPagination): #! Custom class oluşturarak LimitOffesitPagination dan inherit ettik
    default_limit = 10 #! Sayfa başına ekran da görünmesini istediğimiz limitlenmiş API veri sayısı
    limit_query_param = 'maxiumum' #! http://127.0.0.1:8000/api/student/?maxiumum=10&offset=20 limit yazısı maxiımuma döndü


