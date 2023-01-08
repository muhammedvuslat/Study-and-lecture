from .serializers import RegisteSerializer
from django.contrib.auth.models import User
from rest_framework.generics import CreateAPIView
from rest_framework.authtoken.models import Token

class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisteSerializer

    def create(self, request, *args, **kwargs): #! Create fonksiyonunu CreateAPIView (cmd+click) içerisinden override edildi 
        response = super().create(request, *args, **kwargs) #! override edilen datayı super()ile miras olarak alabiliyoruz
        # print(response.data)
        token = Token.objects.create(user_id=response.data['id']) #! token değişkenine Token oluşturuyoruz || Token(cmd+click) na gittiğimiz de user'ın one to one field olduğunu görüyoruz bu da demek oluyor ki bizim database de user_id ile response.data  user id leri eşleştirdiğimizde yeni oluşturulacak olan user için id üzerinden token oluştururuz
        response.data['token'] = token.key
        # print(response.data)
        return response




