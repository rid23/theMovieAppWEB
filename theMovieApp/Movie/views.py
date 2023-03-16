from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from .models import Movie , Cast ,Dialogues ,MovieAndCast
from .serialize_models import MovieSerializer , CastSerializer , DialoguesSerializer , MoviePostSerializer , CastPostSerializer


class MovieView(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class CastView(viewsets.ModelViewSet):
    queryset = Cast.objects.all()
    serializer_class= CastSerializer

class DialogueView(viewsets.ModelViewSet):
    queryset = Dialogues.objects.all()
    serializer_class = DialoguesSerializer

class MoviePostView(APIView):
    def post(self , response):
        serializer = MoviePostSerializer(data = response.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'id':serializer.instance.id})
        else:
            return Response(serializer.errors)
class AddCastView(APIView):
    parser_classes = [JSONParser]
    def post(self , response):
        serializer = CastPostSerializer(data = response.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class MovieGetView(APIView):
    def get(self , response):
        data = Movie.objects.all()
        serializer = MoviePostSerializer(data , many=True)
        return Response(serializer.data)
