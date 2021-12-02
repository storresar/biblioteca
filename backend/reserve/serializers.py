from .models import reservation,p_reserve,v_reserve
from rest_framework import serializers

class reservationSerializer(serializers.ModelSerializer):
    class Meta():
        model = reservation
        fields = '__all__'

class p_reserveSerializer(serializers.ModelSerializer):
    class Meta():
        model = p_reserve
        fields = '__all__'

class v_reserveSerializer(serializers.ModelSerializer):
    class Meta():
        model = v_reserve
        fields = '__all__'