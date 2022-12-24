from django.db import models

# Create your models here.
class Student(models.Model):
    first_name = models.CharField(max_length=30, blank=True, null=True )
    last_name = models.CharField(max_length=30)
    number = models.SmallIntegerField(blank=True)
    is_activate = models.BooleanField(blank=True, null=True)
    email = models.EmailField(blank=True)
    about = models.TextField(blank=True)
    avatar = models.ImageField(blank=True, null=True, upload_to='student') #Kaydolan media verilerinin student klasörü altında toplanmasını sağlar
    register_date = models.DateTimeField(auto_now_add=True)
    files = models.FileField(blank=True, null=True, upload_to='student_files')
    update_date = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f" Number:{self.number} Name: {self.first_name} LastName: {self.last_name}"
    class Meta:
        ordering = ['number']
    