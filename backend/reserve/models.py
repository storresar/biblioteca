from django.db import models
from documents.models import document
from users.models import client

class type_doc(models.Model):
    name_type = models.TextField(max_length=60) 
    
    def __str__(self):
        return self.name_type


class reservation(models.Model):
    id_document = models.ForeignKey(document, on_delete=models.DO_NOTHING)
    id_client = models.ForeignKey(client, on_delete=models.DO_NOTHING)
    reservation_date = models.DateField(auto_now=True)
    id_type_stock = models.ForeignKey(type_doc,on_delete=models.DO_NOTHING)

class p_reserve(models.Model):
    id_reserve = models.ForeignKey(reservation, on_delete=models.CASCADE)
    limit_date = models.DateField(auto_now=False, auto_now_add=False)

class v_reserve(models.Model):
    id_reserve = models.ForeignKey(reservation, on_delete=models.CASCADE)
    licence = models.CharField(max_length=50)
    due_Date = models.DateField(auto_now=False, auto_now_add=False)
    num_renovations = models.IntegerField()