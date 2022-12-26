from django.db import models

class Path(models.Model):
    path_name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.path_name}"

class Student(models.Model):
    path = models.ForeignKey(Path, related_name='students', on_delete=models.CASCADE)
    # Bu noktadaki path üst class
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    number = models.IntegerField(blank=True, null=True)
    age = models.IntegerField()

    def __str__(self):
        return f"{self.number} {self.first_name} {self.last_name}"

