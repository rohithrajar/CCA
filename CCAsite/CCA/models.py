from django.db import models

# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField(upload_to='events/')
    description = models.CharField(max_length=200)
    date = models.DateField()

    def __str__(self):
        return self.title


class Faculty(models.Model):
    name = models.CharField(max_length=50)
    simage = models.ImageField(upload_to='faculty/')
    role = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
    
class Syllabus(models.Model):
    title = models.CharField(max_length=50)
    file = models.FileField(upload_to='syllabus/')

    def __str__(self):
        return self.title
    
    
    