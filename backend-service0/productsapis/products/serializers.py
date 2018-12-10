from rest_framework import serializers
from .models import Category, Products


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'type')

    def update(self, instance, validated_data):
        instance.id = validated_data.get('id', instance.id)
        instance.type = validated_data.get('type', instance.type)
        instance.save()
        return instance

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ('product_id', 'name', 'price', 'category')
    def update(self, instance, validated_data):
        instance.product_id = validated_data.get('product_id', instance.product_id)
        instance.name = validated_data.get('name', instance.name)
        instance.price = validated_data.get('price', instance.price)
        instance.category = validated_data.get('category', instance.category)
        instance.save()
        return instance
