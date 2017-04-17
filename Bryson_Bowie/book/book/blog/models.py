from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Blog(models.Model):
	title = models.CharField(max_length=200, unique=True)
	image = models.TextField(max_length =100000, blank=True, null=True)
	author = models.CharField(max_length=200, unique=True)
	description = models.TextField(max_length=250000, blank=True, null=True) 