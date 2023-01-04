from django.shortcuts import render, get_object_or_404

#! My Framework import
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

#! My import
from .models import Todo
from .serializers import TodoSerializer

@api_view()
def todo_home(request):
    return Response({'Home':'This is todo home page'})


@api_view(['GET','POST'])
def todo_list_create(request):
    if request.method == 'GET':
        todos = Todo.objects.filter(is_done=False) #! Get işlemi normalde objects.all() şeklinde yapılır fakat biz tamamlanmayanları çekmek istediğim için is_done=False olarak işlem yaptık
        serializer = TodoSerializer(todos, many=True) #! queryset olarak gelen data yapısı serializer değişkenine TodoSerializer aracılığıyla alınarak json veri tipine döner. many=True birden fazla queryset olacağı için yazılır
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer =TodoSerializer(data=request.data) #! Post işleminde dışardan örneğin fron-end'den bir data geldiğinden dolayı bunu serializers a iletiyoruz 
        if serializer.is_valid(): #! Gelen data oluşturduğumuz modelse uygun mu validation kontrolü yapıyoruz
            serializer.save() #! is_valid ise saveliyoruz
            return Response(serializer.data, status=status.HTTP_201_CREATED) #! Created başarılı mesajını dönüyoruz
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) #! Değil ise bad request mesajını dönüyoruz (STATUS MESAJLARI İÇİN STATUS İMPORT EDİLMELİ)

@api_view(['GET','DELETE','PUT'])
def todo_detail(request, id): #? Datadan aldığımız id
    todo = get_object_or_404(Todo, id=id)    
    if request.method == 'GET':
        #? todo = Todo.objects.get(id=id) 
        #! Aldığımız id yi çekiyoruz ve id değişkenine eşitliyoruz| Get ile alabiliriz fakat misal 15 adında bir id olmadığında, okunması zor database hataları döncektir bunu engellemek için try catch benzeri otomatik bir yapısı olan get_object_or_404 kullanırız.
        #? todo = get_object_or_404(Todo, id=id) bunu yazdık fakat her defasında yazmamak ve clean kod için if üzerine aldık
        serializer = TodoSerializer(todo)
        return Response(serializer.data) #! Many true demiyoruz çünkü tek dönecek id ile seçildiğin dolayı
    elif request.method == 'PUT':
        serializer = TodoSerializer(data=request.data, instance=todo) #! instance yazmadığımızda kontrol etmeden aynı dataları kayıt eder, bu noktada instance ile todo yu kontrol ettirip değişiklik var ise uygula diyoruz
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        todo.delete()
        return Response({'message': 'Todo deleted succesfuly'})
    