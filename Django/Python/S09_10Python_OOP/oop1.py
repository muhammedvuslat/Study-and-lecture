import os
os.system('cls' if os.name == 'nt' else 'clear')
print("---------------------------------------------------------------- ")
#! Topics to be Covered:
#* Everything in Python is class
#* Defining class
#* Defining class attributes
#* Difference between class attributes and instance attributes
#* SELF keyword
#* Defining methods
#* Class Methods vs. Static Methods and Instance Methods
#* Special methods (init, str)
#* 4 pillars of OOP:
    #? Encapsulation
    #? Abstraction
    #? Inheritance
        #? Multiple inheritance
    #? Polymorphism
        #? Overriding methods
#* extra subjects
#* Inner class
#! What is OOP?
""" # Object Oriented programming (OOP) is a programming paradigm that relies on the concept of classes and objects.
# It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.
# significantly reduces code repetition by classifying similar structures (dont repeat yourself)
# Easier to debug, classes often contain all applicable information to them
# Secure, protects information through encapsulation """

#! Everything in Python is class
# Python >generally class based  vs.  javascript >generally function based
"""def print_types(data):
    for i in data:
        print(i,type(i))
test= [122, "dan", [1,2,3], (1,2,3),{1,2,3,},True,lambda x:x]

print_types(test)"""

#! defining class:
# "class" keyword for defining 
# There is a convention among languages that the class name should be capitalized. 
"""
class Person:
    name = "dan"        #class attributes/properties
    age= 33

person1 = Person()      #creaating object or instance
person2 = Person()

print(person1.name)     #instance inherites class atributes
print(person2.age)

#! print(person1.job)  # Tanımlama öncesi sorguda hata verecektir
Person.job = "Web developer"    #there is connection between classes and instances 
print(person1.job) 
Person.department = "IT"
print(person2.department)"""

#! class attributes vs instance attributes:
"""
class Person:
    company =  "Microsoft"

person1 = Person()  #Person classı altında oluşturalan person1 ve person2 instanceları person içeriğinde ortaktır
person2 = Person() 
print(person1.company)  
print(person2.company)
person2.company = "Apple"
person2.department = "IT"
print(person2.company) # instancelar önce içeriğine bakar yukarıda person2 kendi içeriğine baktığında company variablenın Person clasından geldiği için Person dakini yansıttı fakat artık person2 ye ait tanımlama yapıldığın da person2 kendi içerisindeki appleı print etti

person1.location = "Turkey"  #Farklı instance üzerinden oluşturulan variablelar ise özeldir yani location varible ı sadece person1 a aitttir  
#! print(person2.location) # person2 erişmek isterse hata verecektir
print(person1.location)
print(person2.department)"""

#! SELF keyword and methods
"""
class Person:
    company = "Apple"
    #! def test(): # Hata vereceği konum bookmark işaretli
    #!   print("Test")
    def test(self): #self parametresi ismi önemli ve özel değildir person1 veya 2 tarafından test çağırıldığıda parametre belirteci olarak kullanılır, fakat genel olarark bu parametre self olarak belirtilir.
        print("Test")
    def set_details(aaa,name,age): #Setleme metodu ile parametre alma aaa da olduğu gibi parametri gönderimini belli eden aaa parametre ismide fark etmeyecektir(aaa yerine self best practices dir)
        aaa.name = name
        aaa.age = age
    def get_details(self):
        print(f"Name: {self.name} - Age: {self.age}")

    @staticmethod #! İnstancelara göre değişmeyen bir metod tasarlandığında default dışı hareket etmesi ve parametre gerektirmeyip hata vermemesi için
    def salute():
        print("Hi There")
    

person1 = Person()
person2 = Person()
#! person1.test() = Person.test(person1) ile arka planda aynı işleme sahiptir test methoduna parametre olarark person 1 gönderilidiğinden dolayı test(self) yazılmadığında parametre hatası verecektir.
#? Person.test(person1) kodundaki person1 parametresi gönderilip yukarda test(self) parametresi ile yakalanır self ile person1 aynı olmak zorunda değildir
person1.test()
person2.test()
person1.name = "Steve"
person1.age = 25 
person1.get_details()
# person2.name = "Morgan"
# person2.age = 18
person2.set_details("Morgan",21) #! Setleme metodu ile parametre gönderme 
person2.get_details()
person1.salute()
person2.salute()"""


#! special methods (dunder methods)

#? Special __init__ Methods
#Python’da bir nesne çağırdığınızda otomatik olarak çalışacak ve sadece nesneyi ilk oluşturduğunuzda çalışacak olan bir fonksiyon tanımlayabilirsiniz. Bu fonksiyonun adı Python yapımcıları tarafından __init__() olarak belirlenmiş. Dışarıdan ulaşılmasını istediğimiz her fonksiyona self parametresini eklememiz gerektiğini de belirtelim.
"""
class Person:
    company = "Apple"
    person_count = 0 #! Bu değişken ile Person Classı altnda kaç adet instance oluşturulduğunu öğrennmek için saayaç başlatılır

    #! Parametreleri direkt olarark göndermek için daha önce kullandığımız set_details yerine özel __init__ metodu kullanılır aynı zamanda her instace set edildiğinde çağırılmadan kendini otomatik oluşturan bir metod

    def __init__(self,name,age, gender="Male"): #! Gender da olduğu gibi defult parametre yazılabilir. 
        self.name = name
        self.age = age
        self.gender = gender
        Person.person_count = Person.person_count +1 #! instance sayaç arttırımı
        
        

    #? def set_details(self,name,age):
    #?    self.name = name
    #?    self.age = age

    def get_details(self):
        print(f"Name:{self.name} / Age: {self.age}/ Gender: {self.gender }")
        print(f"İnstance count:{Person.person_count}")


#! İnit özet taımlıı metod ile direkt olarak parametre gönderiyoruz
person1 = Person("Cedric", 8) #! Gender Default parametre olduğundan dolayı parametre olarak yazılmadığında hata vermeyecektir.
person1.get_details()
#! Person classında __init__ metodu otomatik olarak oluşturulduğu ve çağırıldığı için aşağıda olduğu gibi person2 parametresiz gönderildiğinde hata verecektir
#! person2 = Person()
person2 = Person("Chen", 8,"Famale")
person2.get_details() # Count ile kaç adet instance olduğu bilgisini aldık
"""


#? Special __str__ Methods
""" # Bu yöntem, nesnenin dize temsilini döndürür. Bu yöntem, bir nesne üzerinde print() veya str() işlevi çağrıldığında çağrılır. Bu yöntem, String nesnesini döndürmelidir.
class Person:
    company = "Apple"
    person_count = 0
    
    def __init__(self, name, age, gender="male"):
        self.name = name
        self.age = age
        self.gender = gender
        Person.person_count = Person.person_count +1
    def __str__(self):
        return f"{self.name} - {self.age}"
    
        
    def get_details(self):
        print(f"{self.name} - {self.age} - {self.gender}")
    
person1 = Person("victor", 33)
person2 = Person("henry", 33)

# normal zamanda __str__ metdou class içerisine alınmadığın da terminal de classını ve id sini döndüren <__main__.Person object at 0x00000125B9A64FD0> şu şekilde bir çıktı alırız 
# fakat __str__ metdu ile belirtilen değişkenleri return eder ve bu sayede print edebiliriz.
# __str__ metodu instance print() yada str() olarak çağırıldığında çalışacaktır
print(person1)
print(person2)"""
 
#! OOP Principles (4 pillars)
    #? Encapsulation
    #? Abstraction
    #? Inheritance
    #? Polymorphism


#? Encapsulation
 # kullanıcı tarafından sınıfların, verilerin ve metodların ne kadarının görüntülenebileceğini, ne kadarının değiştirilebileceğini belirlendiğimiz yapı

    #   public - private - protected (python veya js'de değil)
        #?genel -    özel -  korumalı(yetkiye dayalı)
    # python'da tam bir kapsülleme yok
"""
class Person:
    company = "Apple"
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self._id = 5000 #!! _ ile id nin private olduğunu bildirdik developarlar tarafından diğer developarların değiştirmemesi yada müdahale edilmemesi gerektiğini belirten işarettir (best Practices)
        self.__number = 200 #! iki alt çizgi __number tam private dışardan ulaşılmaz yapısı vardır
        

    def __str__(self):
        return f"{self.name} - {self.age}"
    
        
    def get_details(self):
        print(f"{self.name} - {self.age}")
    
person1 = Person("victor", 33)
print(person1._id) #!
person1._id=400    #! _id private olmasına ramen okunur yazılır değiştirilir sadece tek alt çizgi ile özel olduğu ifade edilir ve müdehale edilmemesi gerektiği bildirilir
print(person1._id) #!

# print(person1.__number) # __number iki alt çizgili olduğu için bulunmadı hatası verecek çünkü dışardan erişilemez
print(person1._Person__number) #! Bu şekilde içerden ulaşım sağlanabilinir
person2= Person("hı",22)
print(person2._Person__number) #! İçeriden  Farklı bir instance ile  ulaşılmış örnek """


#? Abstraction
# Soyutlama, bir uygulamanın iç karmaşık ayrıntılarını dış dünyadan gizleme işlemidir. Soyutlama, şeyleri basit terimlerle tanımlamak için kullanılır. Uygulama ve istemci programları arasında bir sınır oluşturmak için kullanılır.
# gerçek hayattaki kahve makinesi gibi. nasıl çalıştığını bilmene gerek yok ama işlevselliğini biliyorsun
    
# kullanıcı gereksiz detaylardan ve bilmesine ihtiyaç olmayan yapıdan uzaklaştırarak yormamak - soyutlamak

"""liste = [2,6,5,9,4]
liste.sort()
print(liste) """# sort metodu karışık olan listeyi düzenlenler ama biz arka tarafında neler olup bittiğini bilmeyiz aynı bu şekilde bazı kod ve metodların soyutlanması için kullanır.

#     class Meta:
#         abstract = True
        
# class Question(Update):
#     pass
        
# class Answer(Update):
#     pass """


#? Inheritance
# Inheritance (Kalıtım), bir classın  ve başka bir classın methods larının kullanıldığı prosedürdür.propertielerinin ve methodlarının miras alınan classın, Parent classın olarak bilinir.
#!!! Person Class için Parent ve child yapısının önemli şeması https://gitmind.com/app/docs/mf4lgxwj
#? multiple inheritance


class Person: #Parent class
    company = "Microsoft"

    def __init__(self,name,age):
        self.name = name
        self.age = age
    
    def __str__(self):
        return f"{self.name},{self.age}"
    def get_details(self):
        print(f"{self.name},{self.age}")

class Lang:
    def __init__(self , langs):
        self.langs = langs
    def display_langs(self):
        print(self.langs)

class Employe(Person,Lang):  #Child Class #! Person ve Lang Classlarının bütün özellikleri inherit(miras) edildi
    
    def __init__(self, name, age,path,langs):
        # self.name = name
        # self.age = age
        super().__init__(name,age) # Name ve age i üst satırdaki gibi baştan yazmak yerine parentdan almamızı sağlar super sadece ilk parent için kullanılır daha fazla parent için alt satırdaki kullanım uygundur
        Lang.__init__(self,langs)
        self.path = path
    def get_details(self):
        super().get_details() # init de ki gibi baştan yazmak yerine parentdan almamızı sağlar 
        print(self.path)

# employe classına yazılan yeni init sonrasında employe de init olduğu için artık Person classına gidip kontrol yapmayacak aynı instancelarda ki gibi
emp1 = Employe("Chen",8.5 ,"Web Developer","Python")
# emp1.get_details()
# emp1.display_langs()
# print(emp1.company)
        
#? Polymorphism
#* Overriding:
# Overriding is an object-oriented programming feature that enables a child class to provide different implementation for a method that is already defined and/or implemented in its parent class or one of its parent classes.

#* overloading:
# Two or more methods have the same name but different numbers of parameters or different types of parameters, or both. These methods are called overloaded methods and this is called method overloading. #! the concept of overloading simply does not apply to python(give parameters None default value - or - multipledispatch package)




#? other topics
#print(Employe.mro()) #! mro: method resolution order (kalıtım zinciri)
#print(help(Employe)) #! Employe classının bütün özet bilgisini bize verir çıkmak için ise (:q) kullanılır
#print(emp1.__dict__) #! İlgili instance n verilerini döndürür
# print(isinstance(emp1,Employe)) #! emp1 instancenın Emlpoye classında üretilip üretilmediğini sorgular boolean değer döner
# print(issubclass(Lang, Person)) #! Lang classının Person Classının alt class ı olup olmadığını sorgular

# getattr(instance, attribute) #! İlgili instance ın attribute nu döner
# setattr(instance, attribute, new value) #! İlgili instance ın attribute nu yeni değer ile değiştirirz
# hasattr(instance, attribute) #! İlgili instance ın attribute nü kontrol eder boolean döner
# delattr(instance, attribute) #! İlgili instance ın belirtilen attribute nü siler
#!⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️Örnekleri⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

# print(getattr(emp1, "name"))
# x = getattr(emp1, "name")
# print(x)

# setattr(emp1, "name", "qadir")
# print(getattr(emp1, "name"))

# print(hasattr(emp1, "name"))
# print(delattr(emp1, "age"))
# print(emp1.__dict__)

#? inner class

from django.db import models

class Makale(models.Model):
    name = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    
    class Meta:
        ordering = ["name"]
        verbose_name = "makaleler"

















print("---------------------------------------------------------------- ")


