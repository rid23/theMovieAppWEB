from django.contrib import admin
from django.urls import path , include
from rest_framework.routers import DefaultRouter
from Movie import views


router = DefaultRouter()
router.register('Movie' , views.MovieView , basename='Movie')
router.register('Cast' , views.CastView , basename='Cast')
router.register('Dialogues' , views.DialogueView , basename='Dialogues')



urlpatterns = [
    path('admin/', admin.site.urls),
    path('' , include(router.urls))
]
