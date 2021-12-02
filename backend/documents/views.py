from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import documentSerializer,lecturesSerializer,bookSerializer,scientific_articleSerializer,audit_documentsSerializer
from .models import document,lectures,book,scientific_article,audit_documents

# Create your views here.
class documentViewSet(viewsets.ModelViewSet):
    queryset = document.objects.all()
    serializer_class = documentSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        var1 = serializer.save()
        nueva_auditoria = audit_documents(
            id_document = var1,
            type_audit = 'CREACIÓN DE NUEVO DOCUMENTO',
        )
        nueva_auditoria.save()
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        var1 = serializer.save()
        nueva_auditoria = audit_documents(
            id_document = var1,
            type_audit = 'MODIFICACIÓN DE NUEVO DOCUMENTO',
        )
        nueva_auditoria.save()
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        nueva_auditoria = audit_documents(
            id_document = instance,
            type_audit = 'ELIMINACION DE NUEVO DOCUMENTO',
        )
        nueva_auditoria.save()
        self.perform_destroy(instance)
        return self.list(request)

class lecturesViewSet(viewsets.ModelViewSet):
    queryset = lectures.objects.all()
    serializer_class = lecturesSerializer

class bookViewSet(viewsets.ModelViewSet):
    queryset = book.objects.all()
    serializer_class = bookSerializer

class scientific_articleViewSet(viewsets.ModelViewSet):
    queryset = scientific_article.objects.all()
    serializer_class = scientific_articleSerializer

class audit_documentsViewSet(viewsets.ModelViewSet):
    queryset = audit_documents.objects.all()
    serializer_class = audit_documentsSerializer