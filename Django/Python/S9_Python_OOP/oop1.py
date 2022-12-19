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
"""" class Person:
    name = "dan"        #class attributes/properties
    age= 33

person1 = Person()      #creaating object or instance
person2 = Person()

print(person1.name)     #instance inherites class atributes
print(person2.age)

#! print(person1.job)  # Tanımlama öncesi sorguda hata verecektir
Person.job = "Web developer"    #there is connection between classes and instances 
print(person1.job) """

#! class attributes vs instance attributes:
"""class Person:
    company =  "Microsoft"

person1 = Person()  #Person classı altında oluşturalan person1 ve person2 instanceları person içeriğinde ortaktır
person2 = Person() 
print(person1.company)  
print(person2.company)
person2.company = "Apple"
print(person2.company) # instancelar önce içeriğine bakar yukarıda person2 kendi içeriğine baktığında company variablenın Person clasından geldiği için Person dakini yansıttı fakat artık person2 ye ait tanımlama yapıldığın da person2 kendi içerisindeki appleı print etti

person1.location = "Turkey"  #Farklı instance üzerinden oluşturulan variablelar ise özeldir yani location varible ı sadece person1 a aitttir  
#! print(person2.location) # person2 erişmek isterse hata verecektir
print(person1.location)"""

#! SELF keyword and methods
"""
class Person:
    company = "Apple"
    #! def test(): # Hata vereceği konum bookmark işaretli
    #!   print("Test")
    def test(self): #self parametresi ismi önemli ve özel değildir person1 veya 2 tarafından test çağırıldığıda parametre belirteci olarak kullanılır, fakat genel olarark bu parametre self olarak belirtilir.
        print("Test")
    def set_details(aaa,name,age): #Setleme metodu ile parametre alma aaa da olduğu gibi parametri gönderimini belli eden aaa parametre ismide fark etmeyecektir
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
"""

#! special methods (dunder methods)

class Person:
    company = "Apple"
    person_count = 0 #! Bu değişken ile Person Classı altnda kaç adet instance oluşturulduğunu öğrennmek için saayaç başlatılır

    #! Parametreleri direkt olarark göndermek için daha önce kullandığımız set_details yerine özel __init__ metodu kullanılır aynı zamanda çağırılmadan kendini otomatik oluşturan metod

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
person1 = Person("Cedric", 8) #! Gender Default parametre olduundan dolayı parametre olarak yazılmadığında hata vermeyecektir.
person1.get_details()
#! Person classında __init_- metodu otomatik olarak oluşturulduğu ve çağırıldığı için aşağıda olduğu gibi person2 parametresiz gönderildiğinde hata verecektir
#! person2 = Person()
person2 = Person("Chen", 8)
person2.get_details() # Count ile kaç adet instance olduğu bilgisini aldık




















print("---------------------------------------------------------------- ")
