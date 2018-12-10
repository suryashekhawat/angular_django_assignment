import uuid
from django.db import models

# Create your models here.
class Category(models.Model):
    id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True, primary_key=True)
    type = models.CharField(max_length=250)

class Products(models.Model):
    product_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True, primary_key=True)
    name = models.CharField(max_length=250)
    price = models.CharField(max_length=250)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
