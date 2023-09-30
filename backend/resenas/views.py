from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ResenaSerializer
from .models import Resena

class ResenaView(viewsets.ModelViewSet):
    serializer_class = ResenaSerializer
    queryset = Resena.objects.all()


