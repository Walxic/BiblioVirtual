from django.urls import path, include
from rest_framework import routers
from resenas import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'Reseñas', views.ResenaView, 'Resena')

urlpatterns = [
    path("api/v1", include(router.urls)),
]