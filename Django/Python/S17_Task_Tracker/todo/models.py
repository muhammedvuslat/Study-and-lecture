from django.db import models

class Todo(models.Model):
    # Front-end'e  Sınırlı seçenek sunmak için
    PRIORITY = (
        (1, 'High'), #! 1 back-end , High Front-end
        (2, 'Medium'),
        (3, 'Low')
    )
    task = models.CharField(max_length=50) 
    description = models.TextField(blank=True) #? Blank zorunlu olmayan
    priority = models.SmallIntegerField(choices=PRIORITY,default=3) #? Choices Otomatik olarak belirtilen seçimleri getirir yani numara yazılması yerine yukarıdaki tanımları seçtirir
    is_done = models.BooleanField(default=False) #? Yeni yaratılan bir task bitmiş olamaz başlangıcta false olması sebebi
    updatea_date = models.DateTimeField(auto_now=True) #? Update işlemlerinin tarih-saatinin alana kaydeder
    created_date = models.DateTimeField(auto_now_add=True) #? Ekleme oluşturma işleminde tarih-saat ekleyecektir

    def __str__(self) :
        return self.task