from django.db import models

# Create your models here.
class Movie(models.Model):
    name = models.CharField(max_length=100)
    duration = models.IntegerField()
    cast_name = models.ManyToManyField('Cast' , through='MovieAndCast')

    def __str__(self):
        return self.name


class Cast(models.Model):
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=20)
    character = models.CharField(max_length=100 , null=True)
    Movie_name = models.ForeignKey(Movie , on_delete=models.DO_NOTHING , null=True)
    def __str__(self):
        return f"{self.name} - {self.character}"


class Dialogues(models.Model):
    dialogue_text = models.TextField(max_length=200)
    from_in_movie = models.TimeField()
    to_in_movie = models.TimeField()
    cast = models.ForeignKey(Cast , on_delete=models.CASCADE , related_name='cast_dialogue')
    movie_name = models.ForeignKey(Movie , on_delete=models.CASCADE , related_name='movie_dialogue' , null=True)
    
    def __str__(self):
        return f"{self.dialogue_text} - {self.from_in_movie} - {self.to_in_movie}"


class MovieAndCast(models.Model):
    movie = models.ForeignKey(Movie , on_delete=models.CASCADE)
    cast = models.ForeignKey(Cast , on_delete=models.CASCADE)
    def __str__(self):
        return f"{self.movie} - {self.cast}"