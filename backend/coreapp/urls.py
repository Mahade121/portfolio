from django.urls import path,include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('stories',StoriesApi,basename='stories')
router.register('note',NoteApi,basename='note')
router.register('blog',BlogApi,basename='blog')
router.register('news',NewsApi,basename='news')
router.register('DreamCategory',DreamCategoryApi,basename='DreamCategory')
router.register('Dream',DreamApi,basename='Dream')
router.register('course',CourseApi,basename='course')
router.register('education',EducationApi,basename='education')
router.register('termsOfService',TermsOfServiceApi,basename='termsOfService')
router.register('privacyPolicy',PrivacyPolicyApi,basename='privacyPolicy')

urlpatterns = router.urls

urlpatterns =[
    path('', include(router.urls)),
    path('contact', ContactApi.as_view(), name='contact' )
]
