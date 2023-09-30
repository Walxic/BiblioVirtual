from django.shortcuts import render
from rest_framework import viewsets
from .serializer import TareaSerializer
from .models import Tarea

class TareaView(viewsets.ModelViewSet):
    serializer_class = TareaSerializer
    queryset = Tarea.objects.all()

# Create your views here.
