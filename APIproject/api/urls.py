from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ArticleViewSet, UserViewSet  #ArticleList,ArticleDetails


router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='article')
router.register('users', UserViewSet)
urlpatterns = [
    path('api/', include(router.urls)),
    #path('articles/', article_list),
    #path('articles/<int:pk>/', article_details),
    #path('articles/', ArticleList.as_view()),
    #path('articles/<int:id>/', ArticleDetails.as_view()),
]