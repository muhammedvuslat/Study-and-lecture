from django.db import models

class Students(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    number = models.SmallIntegerField()
    image = models.ImageField(upload_to='students', blank=True)

    def __str__(self):
        return f'{self.first_name} {self.number}'