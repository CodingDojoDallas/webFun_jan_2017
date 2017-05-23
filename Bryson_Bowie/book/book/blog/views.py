from django.shortcuts import render, get_object_or_404
from blog.models import Blog

# Create your views here.
def blogs(request):
	blogs = Blog.objects.all()
	return render(request, 'blogs.html', {'blogs' : blogs })

def blog(request, blog_id):
	blog = get_object_or_404(Blog, pk=blog_id)

	return render(request, 'blog.html', {'blog' : blog })