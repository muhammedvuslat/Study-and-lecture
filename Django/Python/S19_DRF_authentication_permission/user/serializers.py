from rest_framework import serializers
from django.contrib.auth.models import User #! Projenin kendi modelsinde bulunan proje user tablosunu import ediyoruz
from rest_framework.validators import UniqueValidator #! Unique validate import işlemi

class RegisteSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, validators = [UniqueValidator(queryset=User.objects.all())] ) #! User kayıt işleminde default olan email zorunlu olmama özelliğini required=True ile zorunlu hale getiririyoruz|| Emaillerin unique olması için DRF unique validator paketini kullancağız|| Bu alandaki user import ettiğimiz User tablosunun bütün objelerinin unique olması şartını sağlar.
    password = serializers.CharField(write_only=True) #! write_only=True sadece yazma işlmeinde password kullanmamızı sağlar, get işlemlerinde passwor istemez.|| bir diğeri ise read_only=True sadece okuma yani get işlemleriende passwordü çalıştırır.
    password2 = serializers.CharField(write_only=True,required=True) #! Models de data olarak tutulan password ile front end de girilen password 2 yi karşılaştıracağız

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
    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError( #! password ile password2 karşılaştırıldı aynı değillerse hata mesajı belirtildi 
                {'password':'Password fields didnt match.'}
            ) 
        return data 

    def create(self, validated_data):
        validated_data.pop('password2') #! passwordd2 yi kullanıcı yaratırken ederken  database e göndermeyeceğimiz için sildik
        password = validated_data.pop('password') #! passwordü de şifreleyip database aktaracağımız için silip password değişkenine atadık
        user = User.objects.create(**validated_data) #! User yaratırken fields lara ulaşmak için ** kullandık bu şu anlama gelir username=validate_data['username'], email=validate_data['email']...... normal yazmış olsaydık bu şekilde tek tek yazmamız gerekliydi
        user.set_password(password) #! user a yeni passwordü şifrelenmiş şekilde kayıt ediyoruz
        user.save() #! User kayıt işlemi
        return user
