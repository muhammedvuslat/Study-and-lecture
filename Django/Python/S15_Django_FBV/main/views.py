from django.shortcuts import render, HttpResponse

def real_home(request):
    return HttpResponse("This is home page ")