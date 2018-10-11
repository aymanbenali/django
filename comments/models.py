from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Comment(models.Model):
	owner = models.CharField(max_length=100)
	comment = models.TextField()
	# add in thumbnail later
	thumb = models.ImageField(default = 'default.png', blank=True)
	# add in author later
	def __str__(self):
		return self.owner