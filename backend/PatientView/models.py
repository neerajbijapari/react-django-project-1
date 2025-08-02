from django.db import models

# Create your models here.(

class Patient(models.Model):
    name= models.CharField(max_length=100)
    pic= models.CharField(max_length=300)
    age= models.IntegerField()
    diseases= models.CharField(max_length=100)
