from django.urls import path
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.urls import include, path
from django.conf.urls.static import  static
from . import views
router = DefaultRouter()


router.register('products-info', views.ProductInfoViewSet, basename='products-info')

urlpatterns = [
       path('', include(router.urls)),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)