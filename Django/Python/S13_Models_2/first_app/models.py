from django.db import models

# Create your models here.
class Student(models.Model):
    first_name = models.CharField(max_length=30, blank=True, null=True )
    last_name = models.CharField(max_length=30)
    number = models.SmallIntegerField(blank=True)
    is_activate = models.BooleanField(blank=True, null=True)

    def __str__(self):
        return f" Number:{self.number} Name: {self.first_name} LastName: {self.last_name}"