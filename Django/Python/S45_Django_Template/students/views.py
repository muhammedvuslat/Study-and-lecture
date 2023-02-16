from django.shortcuts import render,redirect, get_object_or_404
from django.http import HttpResponse
from .models import Students
from .forms import StudentsForm

#! Yöntem 1 Aşağıdaki metod views içerinde oluşturulan templates yapısı
'''def home (request):
#! Home sayfasında gösterimi için Httpresponse içerisinde html kodu yazıyoruz bu kodu students > urls.py içerisinde tanımlama yapacğız
    return HttpResponse('<h1>Hello World</h1>')'''

#! Yöntem 2 render metodunu kullanrak request oluşturulur ve renderın 2 parametresi olarak templates klasöründe oluşturduğumuz home.html(dosyamızın adı) bildirilir
'''def home(request):
    return render(request, 'home.html')
     #! ana dizinde students appde bulunandan ayrı bir templates klasörü olduğunda bunun içerisinnde ki home.htmlini görecek ve Student app içerisinde bulunan templates klasöründe ki home.html i görmeyecektir
    #! bu gibi durumlarda best practises olarak app içerisinde bulunan templates klasörü templates>Students>home.html dizin yapısına çevrilir ve  def home aşağıdaki gibi şekillendirilir'''


def home(request):
    #! renderın 3. parametresi olarak context gelir ve templatemizi göndermek istediğimiz valueları buraya tanımlarız.
    #! Key value yapısı şeklinde kurulur(contextin ismi değiştirilebilinir fakat bestpractises context dir)
    context = {
        'tanım': 'fullstack developer',
        'desc': 'This is a description',
        'number': 1111,
        'list1': ['a', 1, 'b', ['c', 2]],
        'dict1': {
            'key1': 'value1',
            'key2': 'value2'
        },
        'dict_list': [
            {'name': 'Dawid', 'age': 22},
            {'name': 'Tony', 'age': 32},
            {'name': 'Clara', 'age': 25},
        ]

    }

    return render(request, 'students/home.html', context)

def student_list(request):
    students = Students.objects.all()
    context = {
        'students': students
    }

    return render(request, 'students/student_list.html', context)

def student_add(request):
    form = StudentsForm()
    if request.method == 'POST': #! post işleminde print'i aktif ederek terminalden neler gönderildiğini kontrol edebilirz
        print('POST :', request.POST)
        print('fıles :', request.FILES)
        form = StudentsForm(request.POST, request.FILES)

        if form.is_valid():
            form.save()
            return redirect('student_list') #! Url de name ile belirtmiş olduğumuz alana yönendirir.
    context = {
        'form':form

    }

    return render(request, 'students/student_add.html', context)

def student_update(request, id):
    student = get_object_or_404(Students, id=id)
    form = StudentsForm(instance=student)

    if request.method == 'POST':
        form = StudentsForm(request.POST, request.FILES,instance=student) #! fıles ve post işleminişn detaylarını görmek için terminal print edebilirsin.

        if form.is_valid():
            form.save()
            return redirect('student_list')
        
    context = {
        'form':form
    }

    return render(request, 'students/student_update.html', context)

def student_detail(request, id):
    student = get_object_or_404(Students, id=id)
    context = {
        'student': student
    }

    return render(request, 'students/student_detail.html', context)


def student_delete(request, id):
    student = get_object_or_404(Students, id=id)

    if request.method == 'POST':
        student.delete() #! student_delete.html sayfasından gelen form içerisinde method="POST" olarak yes'e basıldığında bu alana post gelir ve student.post() ile silinir
        return redirect('student_list')

    context = {
        'student': student
    }
    return render(request, 'students/student_delete.html', context)


'''
#! İçerisinde /Users/muhammedvuslatcevik/Desktop/Clarusway /work/Study-and-lecture/Django/Python/S45_Django_Template/students/templates/Students/home.html
{{ variables }} = değişkenleri çağırırız 
{% command %} = python kodlarında daki if leri forları bu yapı içerisine yazıyoruz.
| işareti iser filtreleme gerçekleştirir
'''