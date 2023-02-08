from django.urls import path,include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('stories',StoriesApi,basename='stories')
router.register('note',NoteApi,basename='note')
router.register('blog',BlogApi,basename='blog')
router.register('news',NewsApi,basename='news')

urlpatterns = router.urls

urlpatterns =[
    path('', include(router.urls)),
    path('contact', ContactApi.as_view(), name='contact' )
]
