from django.shortcuts import render

# Create your views here.

def tempest(request):
    return render(request,'tempest.html')
