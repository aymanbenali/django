from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Logo(models.Model):
	name = models.CharField(max_length=100)
	url = models.CharField(max_length=100)
	thumb = models.ImageField(default = 'default.png', blank=True)
	# add in author later
	def __str__(self):
		return self.name