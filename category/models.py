from django.db import models
from django.contrib.auth.models import User
     
# Create your models here.
class Category(models.Model):
	MANAGER = 'Manager'
	MECHANIC = 'Mechanic'
	ELEC = 'Electrical'
	SPON = 'Spon'
	UNKNOW = 'unknown'
	CHOICES = ((MANAGER, 'Manager'),(MECHANIC, 'Mechanic'),(ELEC, 'Electrical'),(SPON, 'S.M.L'),(UNKNOW, 'unkown'))
	#phone_numer = models.PhoneNumberField()
	user = models.ForeignKey(User, on_delete=models.CASCADE, unique=True)
	category = models.CharField(max_length=20, choices=CHOICES, default=SPON)
	is_leader = models.CharField(max_length=20, choices=CHOICES, default=UNKNOW)
    
	def __str__(self):
		return self.user.username
