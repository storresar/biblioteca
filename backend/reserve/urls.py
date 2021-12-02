from rest_framework.routers import DefaultRouter
from .views import reservationViewSet,p_reserveViewSet,v_reserveViewSet
from django.conf.urls import include,url

router = DefaultRouter()
router.register(r'reservations',reservationViewSet)
router.register(r'p_reserve',p_reserveViewSet)
router.register(r'v_reserve',v_reserveViewSet)

urlpatterns = [
    url(r'^api/(?P<id_client>.+)/$', reservationViewSet.as_view({'get': 'list'})),
]

urlpatterns += router.urls