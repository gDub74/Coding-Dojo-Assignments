from django.conf.urls import url
from . import views  

urlpatterns = [
    url(r'^users$', views.users),
    url(r'^users/new$', views.register),
    url(r'^register$', views.register),
    url(r'^login$', views.login)
]