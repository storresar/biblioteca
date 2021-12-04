from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import reservationSerializer,p_reserveSerializer,v_reserveSerializer
from .models import reservation,p_reserve,v_reserve
from documents.models import document
from datetime import datetime,timedelta,date
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend


# Create your views here.

class reservationViewSet(viewsets.ModelViewSet):
    queryset = reservation.objects.all()
    serializer_class = reservationSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id_client', 'id_document']


    def create(self, request, *args, **kwargs):
        if 'data._mutable' in request.data : request.data._mutable = True
        if request.data['id_type_stock'] == 1:
            doc = get_object_or_404(document.objects.filter(pk = request.data['id_document']))
            nuevodoc = document(
                pk = doc.pk,
                title = doc.title,
                publication_date = doc.publication_date,
                state = doc.state,
                id_author = doc.id_author,
                id_type_doc = doc.id_type_doc,
                email_contact = doc.email_contact,
                phone = doc.phone,
                physical_stock = doc.physical_stock - 1,
                virtual_stock = doc.virtual_stock
            )
            nuevodoc.save()
        else:
            doc = get_object_or_404(document.objects.filter(pk = request.data['id_document']))
            nuevodoc = document(
                pk = doc.pk,
                title = doc.title,
                publication_date = doc.publication_date,
                state = doc.state,
                id_author = doc.id_author,
                id_type_doc = doc.id_type_doc,
                email_contact = doc.email_contact,
                phone = doc.phone,
                physical_stock = doc.physical_stock,
                virtual_stock = doc.virtual_stock - 1
            )
            nuevodoc.save()
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        var1 = serializer.save()
        print(serializer.data['id_type_stock'])
        if serializer.data['id_type_stock'] == 1:
            nueva_reserva = p_reserve(
                id_reserve = var1,
                limit_date = (datetime.now() + timedelta(days=7)).strftime("%Y-%m-%d")
            )
            nueva_reserva.save()
        else:
            nueva_reserva = v_reserve(
                id_reserve = var1,
                licence = '',
                due_Date = (datetime.now() + timedelta(days=7)).strftime("%Y-%m-%d"),
                num_renovations = 0
            )
            nueva_reserva.save()
        return Response(serializer.data)


class p_reserveViewSet(viewsets.ModelViewSet):
    queryset = p_reserve.objects.all()
    serializer_class = p_reserveSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id_reserve']

class v_reserveViewSet(viewsets.ModelViewSet):
    queryset = v_reserve.objects.all()
    serializer_class = v_reserveSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id_reserve']