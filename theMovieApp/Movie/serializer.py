from rest_framework import serializers
from .models import Movie , Cast , Dialogues ,MovieAndCast


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'