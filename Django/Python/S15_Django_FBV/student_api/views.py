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
def students_create(request):
    # front-end den gönderilen dataya request.data ile ulaşıp dataya aktarıyoruz
    serilazer = StudentSerializer(data=request.data)
    if serilazer.is_valid():  # Data valid mi değilmi kontrol etmem gerekli doğrulama işlemi
        # serializer.is_valid() True döner ise selizerı kaydeder yani database savelenir
        # is_valid işlemleri models de verdiği değerleri kontrol eder(max_lenght=50) mesela karakter sayısı max50 ye uygun mu değil mi  gibi
        serilazer.save()
        message = {
            "message": f'Student updated succesfully'  # Kayıt başarılı mesajı
        }
        # Bu alandaki status http 201 seçimimiz http created mesajı dır best bractices dir olmazsada hata vermeyecektir
        #! https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
        return Response(message, status=status.HTTP_201_CREATED)
        #! Response(serializer.data kodundan create işleminden sonra create edilen datayı front da görebiliriz
        # return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serilazer.errors, status=status.HTTP_400_BAD_REQUEST)
    # Bu alandaki status http 400 seçimimiz is_valid döngüsünde false olarak istediğimiz değerleri sağlamaması durumunda 200 ok dönmemesi için
