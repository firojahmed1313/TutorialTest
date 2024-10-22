from django.http import HttpResponse
from django.shortcuts import render
def HomePage(request):
    #return HttpResponse("Welcome to Chaiaur Django!")
    return render(request, 'testLayout.html')


def AboutPage(request):
    return HttpResponse("About Chaiaur Django!")


def ContactPage(request):
    return HttpResponse("Contact Chaiaur Django!")


def BlogPage(request):
    return HttpResponse("Blog Page of Chaiaur Django!")