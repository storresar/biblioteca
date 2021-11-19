from rest_framework.routers import DefaultRouter
from .views import userViewSet,clientViewSet,CustomAuthToken
from django.urls import path

router = DefaultRouter()
router.register(r'users',userViewSet)
router.register(r'clients',clientViewSet)

urlpatterns = [
    path('token-auth/', CustomAuthToken.as_view()),
]

urlpatterns += router.urls