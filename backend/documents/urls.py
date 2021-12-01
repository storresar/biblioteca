from rest_framework.routers import DefaultRouter
from .views import documentViewSet,lecturesViewSet,bookViewSet,scientific_articleViewSet

router = DefaultRouter()
router.register(r'document',documentViewSet)
router.register(r'lectures',lecturesViewSet)
router.register(r'book',bookViewSet)
router.register(r'scientific',scientific_articleViewSet)


urlpatterns = []

urlpatterns += router.urls