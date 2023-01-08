from .serializers import RegisteSerializer
from django.contrib.auth.models import User
from rest_framework.generics import CreateAPIView

class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisteSerializer


