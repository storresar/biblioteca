from rest_framework.routers import DefaultRouter
from .views import userViewSet,clientViewSet,CustomAuthToken,author_ViewSet,author_requestViewSet,idDocumentViewSet
from django.urls import path

router = DefaultRouter()
router.register(r'users',userViewSet)
router.register(r'clients',clientViewSet)
router.register(r'author',author_ViewSet)
router.register(r'author-request',author_requestViewSet)
router.register(r'iddocument', idDocumentViewSet)


urlpatterns = [
    path('token-auth/', CustomAuthToken.as_view()),
]

urlpatterns += router.urls