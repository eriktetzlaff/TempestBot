from django.shortcuts import render
from tempest.Ollama import processMessage
from django.http import HttpResponse
# Create your views here.

def tempest(request):
    if request.method == 'POST':
        print('Received data:', request.POST['question'])
        answer = processMessage(request.POST['question'])
        return HttpResponse(answer)
    else:
        return render(request,'tempest.html')


