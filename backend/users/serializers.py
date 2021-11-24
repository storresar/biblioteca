from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import user,client,author,author_request
from django.contrib.auth.hashers import make_password

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = ('id','username','password','first_name', 'last_name', 'email','id_role','date_joined','is_active')

    def validate_password(self, value):
        return make_password(value)

class clientSerializer(serializers.ModelSerializer):
    class Meta:
        model = client
        fields = '__all__'
class author_requestSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = author_request
        fields = '__all__'
class authorSerializer(serializers.ModelSerializer):
    class Meta:
        model = author
        fields = '__all__'
