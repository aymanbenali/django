from django.shortcuts import render, redirect
from .models import Slider
from articles.models import Article
from category.models import Category
from comments.models import Comment
from logos.models import Logo

from django.http import HttpResponse
# Create your views here.

def slider_list(request):
	articles = Article.objects.all().order_by('date')
	category = Category.objects.all()
	comments = Comment.objects.all()
	logos = Logo.objects.all()
	slider = Slider.objects.all()
	return render(request,'articles/articles_list.html',{'slider': slider, 'articles': articles, 'category': category, 'comments': comments, 'logos': logos})