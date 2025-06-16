from django.urls import path
from api.v1.contacts import views


urlpatterns = [
    path('',views.contacts),
]