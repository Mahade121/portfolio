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

class DreamCategoryApi(ReadOnlyModelViewSet):
    queryset = DreamCategory.objects.all()
    serializer_class = DreamCategorySerializer

class DreamApi(ReadOnlyModelViewSet):
    queryset = Dream.objects.all().order_by('-id')
    serializer_class = DreamSerializer

class CourseApi(ReadOnlyModelViewSet):
    queryset = Course.objects.all().order_by('-id')
    serializer_class = CourseSerializer 


class EducationApi(ReadOnlyModelViewSet):
    queryset = Education.objects.all().order_by('-id')[:1]
    serializer_class = EducationSerializer

class TermsOfServiceApi(ReadOnlyModelViewSet):
    queryset = TermsOfService.objects.all().order_by('-id')[:1]
    serializer_class = TermsOfServiceSerializer

class PrivacyPolicyApi(ReadOnlyModelViewSet):
    queryset = PrivacyPolicy.objects.all().order_by('-id')[:1]
    serializer_class = PrivacyPolicySerializer
    