from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Category, Products
from .serializers import CategorySerializer, ProductsSerializer


class CategoryView(viewsets.ModelViewSet):
    queryset  = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (permissions.IsAuthenticated,)

class ProductsView(viewsets.ModelViewSet):
    queryset  = Products.objects.all()
    serializer_class = ProductsSerializer
    permission_classes = (permissions.IsAuthenticated,)
