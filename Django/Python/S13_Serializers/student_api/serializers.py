from rest_framework import serializers
from .models import Student

#! Klasik-Temel serializer yöntemi 
'''class StudentSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=50)
    last_name = serializers.CharField(max_length=50)
    number = serializers.IntegerField()
    age = serializers.IntegerField()

    def create(self, validated_data):
        return Student.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.number = validated_data.get('number', instance.number)
        instance.age = validated_data.get('age', instance.age)
        instance.save()
        return instance'''

#! Daha kullanışlı yöntem
# Klasik yöntemden en önemli farkı model bunu meta ile modeli tanıtmamız gerekecek
#?ModelSerializer sınıfı, Model alanlarına karşılık gelen alanlarla otomatik olarak bir Serializer sınıfı oluşturmanıza olanak sağlayan bir kısayol sağlar. 
#!- Modele bağlı olarak sizin için otomatik olarak bir dizi alan oluşturacaktır.
#!- .create() ve .update()'in basit varsayılan uygulamalarını içerir.

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"
        #! Fields ları filtremek istediğimizde şu şekilde haraket ederiz
        #fields = ["last_name" , "first_name"]
        #! yazılma sırasına göre çıktı verecektir.
        #exclude = ["number"] #! Number dışındakilerin hepsini alacaktır
