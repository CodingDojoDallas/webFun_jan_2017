from django.conf.urls import url
from blog import views as blog_views

urlpatterns = [
	url(r'^blogs/$', blog_views.blogs )
] 