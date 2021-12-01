from django.db import models
from django.contrib.auth.models import AbstractUser
from rest_framework.authtoken.models import Token
from django.db.models.base import Model
from django.conf import settings
from django.dispatch import receiver
from django.db.models.signals import post_save

class roles(models.Model):
    name_rol = models.CharField(max_length=10)

    def __str__(self):
        return self.name_rol


class user(AbstractUser):
    id_role = models.ForeignKey(roles,on_delete= models.DO_NOTHING, null=True)

    def __str__(self):
        return self.username


class id_document(models.Model):
    name_doc = models.CharField(max_length=30)

class client(models.Model):
    id_user = models.ForeignKey(user,on_delete=models.CASCADE)
    born_date = models.DateField()
    id_document = models.ForeignKey(id_document,on_delete=models.DO_NOTHING)
    is_author = models.BooleanField()
    num_document = models.CharField(max_length=20)
    address = models.CharField(max_length=30)
    phone_number = models.CharField(max_length=30)
    state = models.CharField(max_length=30)

class author_request(models.Model):
    id_client = models.ForeignKey(client,on_delete=models.DO_NOTHING)
    state = models.CharField(max_length=30)

class author(models.Model):
    id_request = models.ForeignKey(author_request,on_delete = models.CASCADE)
    num_posts = models.PositiveSmallIntegerField(default=0)
    num_wait_posts = models.PositiveSmallIntegerField()




@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)