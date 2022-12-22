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