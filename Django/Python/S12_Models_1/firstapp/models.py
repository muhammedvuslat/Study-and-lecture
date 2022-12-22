from django.db import models

# Create your models here.

class Student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    number = models.IntegerField()
    about = models.TextField(blank=True, null=True)
    register = models.DateTimeField(auto_now_add=True) # yaratılış tarih ve saatini 
    last_updated_date = models.DateTimeField(auto_now=True) # güncelleme tarih ve saatini 
    is_activate = models.BooleanField()

    def __str__(self):
        return f"Number: {self.number} Name: {self.first_name}"

    class Meta:
        ordering = ["number"] # Admin panelde ki listede numbera göre sıralama sağladı
        verbose_name_plural = "Student_list" # Admin panel de görünen tablo ismini ddeğiştirdi 
    
    def student_year_status(self):
        "Returns the student's year status"
        import datetime
        if self.register < datetime.date(2019, 1, 1):
            return "Senior"
        if self.register < datetime.date(2021, 1, 1):
            return "Junior"
        else:
            return "Freshman"

# ORM Shell command        
# Student.objects.all()
# Student.objects.get(....)
# Student.objects.filter(....)