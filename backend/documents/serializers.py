from rest_framework import serializers
from .models import document,lectures,book,scientific_article

class documentSerializer(serializers.ModelSerializer):
    class Meta():
        model = document
        fields = '__all__'
class lecturesSerializer(serializers.ModelSerializer):
    class Meta():
        model = lectures
        fields = '__all__'
class bookSerializer(serializers.ModelSerializer):
    class Meta():
        model = book
        fields = '__all__'
class scientific_articleSerializer(serializers.ModelSerializer):
    class Meta():
        model = scientific_article
        fields = '__all__'