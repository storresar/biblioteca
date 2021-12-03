from rest_framework.routers import DefaultRouter
from .views import userViewSet,clientViewSet,CustomAuthToken,author_ViewSet,author_requestViewSet,idDocumentViewSet,verificar_captcha
from django.urls import path
from django.conf.urls import include,url

router = DefaultRouter()
router.register(r'users',userViewSet)
router.register(r'clients',clientViewSet)
router.register(r'author',author_ViewSet)
router.register(r'author-request',author_requestViewSet)
router.register(r'iddocument', idDocumentViewSet)


urlpatterns = [
    path('token-auth/', CustomAuthToken.as_view()),
    url(r'^api/(?P<id_user>.+)/$', clientViewSet.as_view({'get': 'list'})),
    path('verificar_captcha/', verificar_captcha),
]

urlpatterns += router.urls