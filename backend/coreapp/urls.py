from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter
router = DefaultRouter()

router.register('stories',StoriesApi,basename='stories')
router.register('note',NoteApi,basename='note')

urlpatterns = router.urls
