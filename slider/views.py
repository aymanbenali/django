from django.shortcuts import render, redirect
from .models import Slider
from articles.models import Article
from django.http import HttpResponse
# Create your views here.

def slider_list(request):
	slider = Slider.objects.all()
	articles = Article.objects.all().order_by('date')
	return render(request,'articles/articles_list.html',{'slider': slider,'articles': articles})