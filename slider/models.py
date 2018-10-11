from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Slider(models.Model):
	title = models.CharField(max_length=100)
	title2 = models.CharField(max_length=100)
	# add in thumbnail later
	thumb = models.ImageField(default = 'default.png', blank=True)
	# add in author later
	def __str__(self):
		return self.title