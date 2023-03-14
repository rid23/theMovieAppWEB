from django.db import models

# Create your models here.
class Movie(models.Model):
    name = models.CharField(max_length=100)
    duration = models.IntegerField()

class Cast(models.Model):
    name = models.CharField(max_length=100)
    charcter = models.CharField(max_length=100)
    gender = models.CharField(max_length=20)
    movie = models.ManyToManyField('Movie' , through='MovieAndCast')

class Dialogues(models.Model):
    dialogue_text = models.TextField(max_length=200)
    from_in_movie = models.TimeField()
    to_in_movie = models.TimeField()
    cast = models.ForeignKey(Cast , on_delete=models.CASCADE)
class MovieAndCast(models.Model):
    movie = models.ForeignKey(Movie , on_delete=models.CASCADE)
    cast = models.ForeignKey(Cast , on_delete=models.CASCADE)