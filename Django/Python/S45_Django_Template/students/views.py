from django.shortcuts import render
from django.http import HttpResponse

#! Yöntem 1 Aşağıdaki metod views içerinde oluşturulan templates yapısı
'''def home (request): #! Home sayfasında gösterimi için Httpresponse içerisinde html kodu yazıyoruz bu kodu students > urls.py içerisinde tanımlama yapacğız
    return HttpResponse('<h1>Hello World</h1>')'''

#! Yöntem 2 render metodunu kullanrak request oluşturulur ve renderın 2 parametresi olarak templates klasöründe oluşturduğumuz home.html(dosyamızın adı) bildirilir
'''def home(request):
    return render(request, 'home.html')
     #! ana dizinde students appde bulunandan ayrı bir templates klasörü olduğunda bunun içerisinnde ki home.htmlini görecek ve Student app içerisinde bulunan templates klasöründe ki home.html i görmeyecektir
    #! bu gibi durumlarda best practises olarak app içerisinde bulunan templates klasörü templates>Students>home.html dizin yapısına çevrilir ve  def home aşağıdaki gibi şekillendirilir'''


def home(request):
    #! renderın 3 parametresi olarak context gelir ve templatemizi göndermek istediğimiz valueları buraya tanımlarız.
    #! Key value yapısı şeklinde kurulur
    context = {
        'tanım': 'Back - End Developer',
        'desc': 'This is a description',
        'number': 1111,
        'list1': ['a', 1, 'b', ['c', 2]],
        'dict1': {
            'key1': 'value1',
            'key2': 'value2'
        }
    }

    return render(request, 'students/home.html', context)

'''
#! İçerisinde /Users/muhammedvuslatcevik/Desktop/Clarusway /work/Study-and-lecture/Django/Python/S45_Django_Template/students/templates/Students/home.html
{{ variables }} = değişkenleri çağırırız 
{% command %} = python kodlarında daki if leri forları bu yapı içerisine yazıyoruz.
'''