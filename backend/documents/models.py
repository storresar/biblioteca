from django.db import models
from users.models import author
from django.db.models.base import Model

class type_document(models.Model):
    name_doc = models.TextField(max_length=60)

class document(models.Model):
    title = models.TextField(max_length=60)
    publication_date = models.DateField(auto_now=False, auto_now_add=False)
    state = models.CharField( max_length=50)
    id_author = models.ForeignKey(author, on_delete=models.DO_NOTHING)
    id_type_doc = models.ForeignKey(type_document, on_delete=models.CASCADE)
    email_contact = models.EmailField( max_length=254)
    phone = models.CharField(max_length=50)
    physical_stock = models.IntegerField()
    virtual_stock = models.IntegerField()

class lectures(models.Model):
    id_doc = models.ForeignKey(document,on_delete=models.CASCADE)
    isbn = models.CharField(max_length=50)
    congress_name = models.CharField(max_length=50)

class book(models.Model):
    id_doc = models.ForeignKey(document,on_delete=models.CASCADE)
    isbn = models.CharField(max_length=50)
    total_pages = models.IntegerField()

class scientific_article(models.Model):
    id_doc = models.ForeignKey(document,on_delete=models.CASCADE)
    ssn = models.CharField(max_length=50)
