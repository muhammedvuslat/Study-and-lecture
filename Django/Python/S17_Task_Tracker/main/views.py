from django.http import HttpResponse

def home(request):
    return HttpResponse('<center><h1 style="background-color:orange;">Welcome to ApiTodo</h1></center>')