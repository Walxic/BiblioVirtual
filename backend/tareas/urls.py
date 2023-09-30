from django.urls import path, include
from rest_framework import routers
from tareas import views
from rest_framework.documentation import include_docs_urls


router = routers.DefaultRouter()
router.register(r'Tareas', views.TareaView, 'Tarea')

urlpatterns = [
    path("api/v2", include(router.urls)),
]