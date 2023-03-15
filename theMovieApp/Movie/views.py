from django.shortcuts import render
from rest_framework import viewsets
from .models import Movie , Cast ,Dialogues ,MovieAndCast
from .serialize_models import MovieSerializer , CastSerializer , DialoguesSerializer


class MovieView(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class CastView(viewsets.ModelViewSet):
    queryset = Cast.objects.all()
    serializer_class= CastSerializer

class DialogueView(viewsets.ModelViewSet):
    queryset = Dialogues.objects.all()
    serializer_class = DialoguesSerializer

