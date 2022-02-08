from django.db import models

# Create your models here.

class ProductsInfo(models.Model):
    TYPE_CHOICES=[ 
    (1, 'plain'),
    (2, 'meter'),
    ]
   
    code = models.CharField(max_length=10)
    name = models.CharField(max_length=30)
    type = models.IntegerField(choices=TYPE_CHOICES)
    availability = models.BooleanField()
    needing_repair = models.BooleanField()
    durability = models.FloatField()
    max_durability = models.FloatField()
    mileage = models.FloatField()
    price = models.FloatField()
    minimum_rent_period= models.IntegerField()

    def __str__(self):
        return self.name 
