from django.shortcuts import render, HttpResponse, get_object_or_404
from .models import Student, Path
from .serializers import StudentSerializer, PathSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])  # Yazmasak bile default olarak GET dir
def home(request):
    return Response({'home': 'This is home page'})

#! http methods --------------->
#! GET ()
    # ? Databasaden veri çağırma public işlemdir
#! POST ()
    # ? Database de değişiklik yapmal için create, private bir işlemdir
#! PUT ()
    # ? Database de kayıt değişikliği için private işlemdir(Bir objede değişiklik yapıldığında bütün data tekrar gönderilmeli )
#! delete ()
    # ? Database de kayıt silmek için
#! PATCH ()
    # ? Database de kayıt değişikliği için private işlemdir (POST dan farklı olarak değişiklik yapmak istediğin objeyi değişikli yaparak tek olarak gönderebiliriz)


@api_view(['GET'])
def students_list(request):
    # .model içerisinden Student classımdaki bütün objeleri çekiyorum
    students = Student.objects.all()
    # print(f" STUDENTS {students}")
    # Serializer etmesi için datadaki student verilerini gönderiyoruz (models>serializer>views)(many de birden fazla obje çekebilmek için)
    serializer = StudentSerializer(students, many=True)
    # print(f" SERİALİZER {serializer}")
    # print(f" SERİALZERDATA {serializer.data}")
    return Response(serializer.data)


@api_view(['POST'])
def student_create(request):
    # front-end den gönderilen dataya request.data ile ulaşıp dataya aktarıyoruz
    serializer = StudentSerializer(data=request.data)
    if serializer.is_valid():  # Data valid mi değilmi kontrol etmem gerekli doğrulama işlemi
        # serializer.is_valid() True döner ise selizerı kaydeder yani database savelenir
        # is_valid işlemleri models de verdiği değerleri kontrol eder(max_lenght=50) mesela karakter sayısı max50 ye uygun mu değil mi  gibi
        serializer.save()
        message = {
            "message": f'Student updated succesfully'  # Kayıt başarılı mesajı
        }
        # Bu alandaki status http 201 seçimimiz http created mesajı dır best bractices dir olmazsada hata vermeyecektir
        #! https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
        return Response(message, status=status.HTTP_201_CREATED)
        #! Response(serializer.data kodundan create işleminden sonra create edilen datayı front da görebiliriz
        # return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # Bu alandaki status http 400 seçimimiz is_valid döngüsünde false olarak istediğimiz değerleri sağlamaması durumunda 200 ok dönmemesi için


@api_view(['GET'])
def student_detail(request, id):  # ! urlden gelen id burada yakalanır
    # ? databaseden id numarası belirtilen getiriliyor olanı getiriyor
    student = get_object_or_404(Student, id=id)
    # get_object_404 içerisinden student dan id si belirtileni getir olmayan bir id ise 404 hatasını döndürmesi için bür django metodudur
    serializer = StudentSerializer(student)
    return Response(serializer.data)


@api_view(['PUT'])
def student_update(request, id):
    student = get_object_or_404(Student, id=id)
    serializer = StudentSerializer(instance=student, data=request.data)
    if serializer.is_valid():
        serializer.save()
        message = {
            "message": f'Student updated succesfully'  # Update başarılı mesajı
        }
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def student_delete(request, id):
    student = get_object_or_404(Student, id=id)
    student.delete()
    message = {
        "message": 'student deleted succes'
    }
    return Response(message)


@api_view(['GET', 'POST'])
def student_api(request):
    if request.method == 'GET':
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            data = {
                "message": f"Student {serializer.validated_data.get('first_name')} saved successfully!"}
            return Response(data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])
def student_api_get_update_delete(request, pk):
    student = get_object_or_404(Student, pk=pk)
    if request.method == 'GET':
        serializer = StudentSerializer(student)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = StudentSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            data = {
                "message": f"Student {student.last_name} updated successfully"
            }
            return Response(data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PATCH':
        serializer = StudentSerializer(
            student, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            data = {
                "message": f"Student {student.last_name} updated successfully"
            }
            return Response(data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        student.delete()
        data = {
            "message": f"Student {student.last_name} deleted successfully"
        }
        return Response(data)
