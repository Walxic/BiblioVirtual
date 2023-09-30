from rest_framework import serializers
from .models import Resena

class ResenaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resena
        fields = ('id', 'Titulo', 'Autor', 'Reseña')