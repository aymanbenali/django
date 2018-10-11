from django.urls import path
from django.conf.urls import url
from . import views

app_name='slider'

urlpatterns = [
    url(r'^$',views.slider_list, name="slide"),
]
