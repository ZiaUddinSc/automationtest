from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status, viewsets
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import ProductInfoSerializer
from .models import ProductsInfo
from rest_framework import filters



class ProductInfoViewSet(viewsets.ModelViewSet):
    serializer_class = ProductInfoSerializer
    queryset = ProductsInfo.objects.all()
    #permission_classes = (IsAuthenticated,)
    filter_backends = (DjangoFilterBackend,filters.SearchFilter)
    filterset_fields = ('id','code','name','price')
    search_fields = ['^code', '^name','=price']
