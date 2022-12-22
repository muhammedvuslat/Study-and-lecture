from django.shortcuts import render
from django.http import HttpResponse

def home(required):
    return HttpResponse("Hello Home")


