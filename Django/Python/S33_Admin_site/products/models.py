from django.db import models
from django.utils import timezone

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    create_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    is_in_stock = models.BooleanField(default=True)
    slug = models.SlugField(null=True, blank=True) #! Slug bilgisi için notlara bak

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"
    
    def __str__(self):
        return self.name

    def how_many_reviews(self): # Yorum sayıları için bunun görünğmğnğ admin.py list displayda çağırıyoruz
        count = self.reviews.count() #! self.reviews da bulunan reviews reviews modelinde bulunan  related_name='reviews
        return count
    
    '''def added_days_ago(self): #! admin.py içerisindeki bu metod aynı olup farkları ise bu metod içerisinde argüman(product.create_date) kullanmama gerek yoktur. Kendi alanında oldupundan dolayı self ile yakalayıp işlem yapabilirz.(bknz.| admin.py>added_days_ago) ek olarak bu metodu projenin farklı noktalarında kullanmak istersek models'e yazarız ama sadece admin panelde görmek istersek admin.py da yazmamız yeterli olur.
        fark = timezone.now() - self.create_date
        return fark.days'''

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews') #! Bir ürün altında birden fazla yorum olabilceğinden dolayı ForeinKey ilişkisi kuruldu.
    review = models.TextField()
    is_released = models.BooleanField(default=True)
    created_date = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name = 'Review'
        verbose_name_plural = 'Reviews'

    def __str__(self):
        return f"{self.product.name} - {self.review}"



