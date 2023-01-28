from import_export import resources
from products.models import Review

class ReviewResource(resources.ModelResource): #! ModelResource dan inherit ediyoruz

    class Meta:
        model = Review # default all fields
        # fields = ("is_released", "product") #! data inport ve export işlemlerindeki fieldları ayarlar