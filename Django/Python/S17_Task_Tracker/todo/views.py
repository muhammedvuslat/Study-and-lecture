from django.shortcuts import render

#! My Framework import
from rest_framework.decorators import api_view
from rest_framework.response import Response

#! My import
from .models import Todo
from .serializers import TodoSerializer

@api_view(['GET','POST'])
def todo_list_create(request):
    if request.method == 'GET':
        todos = Todo.objects.filter(is_done=False) #! Get işlemi normalde objects.all() şeklinde yapılır fakat biz tamamlanmayanları çekmek istediğim için is_done=False olarak işlem yaptık
        serializer = TodoSerializer(todos, many=True) #! queryset olarak gelen data yapısı serializer değişkenine TodoSerializer aracılığıyla alınarak json veri tipine döner. many=True birden fazla queryset olacağı için yazılır
        return Response(serializer.data)