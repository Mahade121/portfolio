from django.shortcuts import render
from coreapp.models import *
from .serializers import *

from rest_framework.viewsets import ReadOnlyModelViewSet
# Create your views here.

class StoriesApi(ReadOnlyModelViewSet):
    queryset = Stories.objects.all().order_by('-id')[:1]
    serializer_class = StoriesSerializer

class NoteApi(ReadOnlyModelViewSet):
    queryset = Note.objects.all().order_by('-id')
    serializer_class = NoteSerializer
