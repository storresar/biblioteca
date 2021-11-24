from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .models import user,client,author,author_request
from .serializers import clientSerializer,userSerializer,author_requestSerialiazer,authorSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken

# Create your views here.

class userViewSet(viewsets.ModelViewSet):
    queryset = user.objects.all()
    serializer_class = userSerializer

class clientViewSet(viewsets.ModelViewSet):
    queryset = client.objects.all()
    serializer_class = clientSerializer
class author_requestViewSet(viewsets.ModelViewSet):
    queryset =author_request.objects.all()
    serializer_class = author_requestSerialiazer
class author_ViewSet(viewsets.ModelViewSet):
    queryset = author.objects.all()
    serializer_class = authorSerializer
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