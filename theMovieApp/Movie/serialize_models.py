from rest_framework import serializers
from .models import Movie , Cast , Dialogues ,MovieAndCast



class DialoguesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Dialogues
        fields = ['dialogue_text' , 'from_in_movie', 'to_in_movie' ,'cast'  ]

class CastSerializer(serializers.ModelSerializer):
    cast_dialogue = DialoguesSerializer(many=True)
    class Meta:
        model = Cast
        fields=[ 'id' ,  'name' , 'gender' , 'character' , 'Movie_name' , 'cast_dialogue']

class MovieSerializer(serializers.ModelSerializer):
    casts = CastSerializer(many=True)
    class Meta:
        model = Movie
        fields = ['name' , 'duration' , 'casts']

class CastPostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Cast
        fields=['name', 'gender' , 'character' , 'Movie_name']

class MoviePostSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Movie
        fields=['id' , 'name' , 'duration']
