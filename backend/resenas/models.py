from django.db import models

# Creacion del modelo reseña.

class Resena (models.Model):
   titulo = models.CharField(max_length=200)
   autor = models.CharField(max_length=200)
   reseña = models.TextField(blank=True)
   completa = models.BooleanField(default=False)

def __str__(self):
    return self.titulo
