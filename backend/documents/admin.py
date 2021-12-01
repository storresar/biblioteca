from django.contrib import admin
from .models import document,lectures,book,scientific_article,type_document
# Register your models here.



admin.site.register(document)
admin.site.register(lectures)
admin.site.register(book)
admin.site.register(scientific_article)
admin.site.register(type_document)