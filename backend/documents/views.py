from django.shortcuts import render
from rest_framework import viewsets
from .serializers import documentSerializer,lecturesSerializer,bookSerializer,scientific_articleSerializer
from .models import document,lectures,book,scientific_article

# Create your views here.
class documentViewSet(viewsets.ModelViewSet):
    queryset = document.objects.all()
    serializer_class = documentSerializer

class lecturesViewSet(viewsets.ModelViewSet):
    queryset = lectures.objects.all()
    serializer_class = lecturesSerializer

class bookViewSet(viewsets.ModelViewSet):
    queryset = book.objects.all()
    serializer_class = bookSerializer

class scientific_articleViewSet(viewsets.ModelViewSet):
    queryset = scientific_article.objects.all()
    serializer_class = scientific_articleSerializer