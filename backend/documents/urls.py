from rest_framework.routers import DefaultRouter
from .views import documentViewSet,lecturesViewSet,bookViewSet,scientific_articleViewSet,audit_documentsViewSet

router = DefaultRouter()
router.register(r'documents',documentViewSet)
router.register(r'lectures',lecturesViewSet)
router.register(r'book',bookViewSet)
router.register(r'scientific',scientific_articleViewSet)
router.register(r'audit',audit_documentsViewSet)


urlpatterns = []

urlpatterns += router.urls