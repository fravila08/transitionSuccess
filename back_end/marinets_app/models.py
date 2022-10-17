from email.policy import default
from xmlrpc.client import Boolean
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class AppUser(AbstractUser):
    name = models.CharField(max_length=250, null=False, default='unkown')
    email = models.EmailField(
        verbose_name='email address',
        max_length= 255,
        unique=True,
    )
    USERNAME_FIELD= 'email'
    REQUIRED_FIELDS= []
    # information the user will need
    married = models.BooleanField(default=False)
    gi_bill=models.BooleanField(default= False)
    va_homeloan=models.BooleanField(default=False)
    va_health_claims= models.BooleanField(default=False)
    skillsbridge= models.BooleanField(default=False)
    trs=models.BooleanField(default=False)
    