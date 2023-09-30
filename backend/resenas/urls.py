from django.urls import path, include
from rest_framework import routers
from resenas import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'resena', views.ResenaView, 'Resena')

urlpatterns = [
    path("api/", include(router.urls)),
]