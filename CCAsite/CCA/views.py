from django.shortcuts import render
from .models import Faculty, Event


# Create your views here.
def About(request):
    context = {'About': About}
    return render (request,'About.html',context)

def facilities(request):
    context = {'facilities': facilities}
    return render (request,'facilities.html',context)

def faculty(request):
    members = Faculty.objects.all()
    context = {'faculty': members}
    return render (request,'faculty.html',context)

def syllabus(request):
    context = {'syllabus': syllabus}
    return render (request,'syllabus.html',context)

def vision(request):
    context = {'vision': vision}
    return render (request,'vision.html',context)

def home(request):
    events = Event.objects.all()
    context = {'events': events}
    return render (request,'index.html',context)


