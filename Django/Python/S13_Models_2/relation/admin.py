from django.contrib import admin
from .models import (Adress,Product,Profile)
# Register your models here.
admin.site.register(Adress)
admin.site.register(Profile)
admin.site.register(Product)