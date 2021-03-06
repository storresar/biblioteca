from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .models import user,client,author,author_request, id_document
from .serializers import clientSerializer,userSerializer,author_requestSerialiazer,authorSerializer, idDocumentSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.conf import settings
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
import requests
# Create your views here.

class userViewSet(viewsets.ModelViewSet):
    queryset = user.objects.all()
    serializer_class = userSerializer

class idDocumentViewSet(viewsets.ModelViewSet):
    queryset = id_document.objects.all()
    serializer_class = idDocumentSerializer

class clientViewSet(viewsets.ModelViewSet):
    queryset = client.objects.all()
    serializer_class = clientSerializer

    def get_queryset(self):
        id_user = self.request.query_params.get('id_user')
        print(id_user)
        if(id_user == None):
            return client.objects.all()
        else:
            return client.objects.filter(id_user=id_user)

class author_requestViewSet(viewsets.ModelViewSet):
    queryset =author_request.objects.all()
    serializer_class = author_requestSerialiazer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id_client']

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        if request.data['state'] == 'A':
            nuevo_autor = author(
                id_request = instance,
                num_posts = 0,
                num_wait_posts = 0
            )
            nuevo_autor.save()
            cliente_n = client.objects.get(pk = request.data['id_client'])
            cliente_n.is_author = True
            cliente_n.save()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

class author_ViewSet(viewsets.ModelViewSet):
    queryset = author.objects.all()
    serializer_class = authorSerializer

    def get_queryset(self):
        id_user = self.request.query_params.get('id_user')
        print(id_user)
        if(id_user == None):
            return author.objects.all()
        else:
            id = get_object_or_404(client.objects.filter(id_user=id_user))
            print(id)
            id = get_object_or_404(author_request.objects.filter(id_client=id.id))
            return author.objects.filter(id_request=id)
    
class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
        })

@api_view(['POST'])
@permission_classes((AllowAny,))
def verificar_captcha(request):
    recaptcha_response = request.data['g-recaptcha-response']
    data = {
        'secret': settings.GOOGLE_RECAPTCHA_SECRET_KEY,
        'response': recaptcha_response
    }
    r = requests.post('https://www.google.com/recaptcha/api/siteverify', data=data)
    result = r.json()
    if result['success']:
        return Response(True, status=r.status_code)
    else:
        return Response(False, status=r.status_code)