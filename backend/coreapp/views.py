from django.shortcuts import render
from coreapp.models import *
from .serializers import *
from rest_framework import generics
from rest_framework.viewsets import ReadOnlyModelViewSet

# Create your views here.

class StoriesApi(ReadOnlyModelViewSet):
    queryset = Stories.objects.all().order_by('-id')[:1]
    serializer_class = StoriesSerializer

class NoteApi(ReadOnlyModelViewSet):
    queryset = Note.objects.all().order_by('-id')
    serializer_class = NoteSerializer


class BlogApi(ReadOnlyModelViewSet):
    queryset = Blog.objects.all().order_by('-id')
    serializer_class = BlogSerializer

class NewsApi(ReadOnlyModelViewSet):
    queryset = News.objects.all().order_by('-id')
    serializer_class = NewsSerializer


class ContactApi(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    