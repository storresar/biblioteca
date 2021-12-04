from rest_framework.routers import DefaultRouter
from .views import documentViewSet,lecturesViewSet,bookViewSet,scientific_articleViewSet,audit_documentsViewSet
from django.conf.urls import include,url

router = DefaultRouter()
router.register(r'documents',documentViewSet)
router.register(r'lectures',lecturesViewSet)
router.register(r'book',bookViewSet)
router.register(r'scientific',scientific_articleViewSet)
router.register(r'audit',audit_documentsViewSet)


urlpatterns = [
    url(r'^api/(?P<state>.+)/$', documentViewSet.as_view({'get': 'list'})),
    url(r'^api/(?P<id_user>.+)/$', documentViewSet.as_view({'get': 'list'})),
]

urlpatterns += router.urls