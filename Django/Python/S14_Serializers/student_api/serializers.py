from rest_framework import serializers
from .models import Student, Path

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

    born_year = serializers.SerializerMethodField()
    # SerializerMethodField read_only dir yani sadece okumaya yöneliktir post yaparken boşta olsa yazılmamalı.
    # SerializerMethodField methodu bizden bir etod beklemekte ve alt satırlarda get_born_year ile yeni bir verimizi database işlemeden front ende göndermiş olduk. aynı zamanda Meta clasında bu eklenen datayı bbelirtmemmiz gerekli
    path= serializers.StringRelatedField()
    # aynı zamanda isimlerinde uyuşması gerekli (models da ki tablo classı isimleri ile)
    #! Aynı şekilde read_only
    #! StringRelatedField, modelde gösterilen __str__ yöntemini kullanarak ilişkinin hedefini temsil etmek için kullanılabilir. <https://www.django-rest-framework.org/api-guide/relations/>
    path_id = serializers.IntegerField()
    class Meta:
        model = Student       
        fields = ["id","first_name", "last_name","number", "age", "born_year" , "path","path_id"]

        #! Fields ları filtremek istediğimizde şu şekilde haraket ederiz
        #fields = ["last_name" , "first_name"]
        #! yazılma sırasına göre çıktı verecektir.
        #exclude = ["number"] #! Number dışındakilerin hepsini alacaktır
    def get_born_year(self,obj):
        import datetime
        current_time = datetime.datetime.now() #metodla şimdi ki zamanı aldık
        return current_time.year - obj.age # get işlemi olarak tablodaki age i şimdi ki zamandan çıkartıp doğum yılına ulaştık
class PathSerializer(serializers.ModelSerializer):

    #students = StudentSerializer(many=True)
    #! Studenet tablosunu pathın altında çektiğimizde api dan bu şekilde bir çıktı alınır
    '''{
        "id": 1,
        "path_name": "fs",
        "students": [
            {
                "id": 2,
                "first_name": "Ahmet",
                "last_name": "Mehmet",
                "number": 2,
                "age": 33,
                "born_year": 1989,
                "path": "fs",
                "path_id": 1
            }
        ]
    }''' 
    students = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='detail'
    )
   
    
    class Meta:
        model = Path
        # fields = "__all__"
        fields = ["id", "path_name", "students"]
