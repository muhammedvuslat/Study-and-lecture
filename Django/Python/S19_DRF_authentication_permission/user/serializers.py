from rest_framework import serializers
from django.contrib.auth.models import User #! Projenin kendi modelsinde bulunan proje user tablosunu import ediyoruz
from rest_framework.validators import UniqueValidator #! Unique validate import işlemi

class RegisteSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, validators = [UniqueValidator(queryset=User.objects.all())] ) #! User kayıt işleminde default olan email zorunlu olmama özelliğini required=True ile zorunlu hale getiririyoruz|| Emaillerin unique olması için DRF unique validator paketini kullancağız|| Bu alandaki user import ettiğimiz User tablosunun bütün objelerinin unique olması şartını sağlar.
    password = serializers.CharField(write_only=True) #! write_only=True sadece yazma işlmeinde password kullanmamızı sağlar, get işlemlerinde passwor istemez.|| bir diğeri ise read_only=True sadece okuma yani get işlemleriende passwordü çalıştırır.
    password2 = serializers.CharField(write_only=True,required=True)

    class Meta:
        model = User
        fields=(
            'id',
            'username',
            'email',
            'first_name',
            'last_name',
            'password',
            'password2'
        )