from django.db import models
from django.contrib.auth.models import User
     
class UserProfile(models.Model):
	avatar = models.ImageField(default='avatar.png' ,blank = True)
	home_address = models.TextField()
	#phone_numer = models.PhoneNumberField()
	user = models.ForeignKey(User, on_delete=models.CASCADE, unique=True)

# Create your models here.
