from multiprocessing.sharedctypes import Value
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from .models import *
from django.contrib.auth import authenticate, login, logout
from django.core import serializers
from rest_framework.response import Response
# Create your views here.
def send_the_homepage(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

def send_the_homepage(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

#This will create a signup route NOTE: this doesnt render anything instead it's specifically 
# dedicated to altering the datbase by creating new users that can sign in or out
@api_view(['POST'])
def sign_up(request):
    try:
        AppUser.objects.create_user(name=request.data['name'], username=request.data['email'], password=request.data['password'], email=request.data['email'])
    except Exception as e:
        print(str(e))
    return HttpResponse('Youve signed up')

@api_view(['POST'])
def log_in(request):
    email = request.data['email']
    password=request.data['password']
    user = authenticate(username= email, password = password)
    if user is not None:
        if user.is_active:
            try:
                login(request._request, user)
            except Exception as e:
                print(str(e))
            return HttpResponse('Youre logged in')
        else: 
            return HttpResponse('Not Active')
    else:
        return HttpResponse('No user recognized')
    
@api_view(['POST'])
def log_out(request):
    logout(request)
    return HttpResponse('Logged Out')

@api_view(['GET'])                
def curr_user(request):
    if request.user.is_authenticated:
        data= serializers.serialize("json", [request.user], fields=['name', 'email', 'password'])
        return HttpResponse(data)
    else:
        return JsonResponse({'user':None})


@api_view(['PUT', "GET"])
def handle_change(request):
    user=AppUser.objects.get(id= request.user.id)
    if request.method == "PUT":
        try:
            to_change=request.data['toChange']
            value=request.data['value']
            if to_change== "married":
                user.married= value
            if to_change == "gi_bill":
                user.gi_bill= value
            if to_change == "va_homeloan":
                user.va_homeloan = value
            if to_change== "va_health_claims":
                user.va_health_claims = value
            if to_change == "skillsbrigde":
                user.skillsbridge= value
            if to_change == "trs":
                user.trs = value
            user.save()
            return Response({"Change successful":[to_change, value]})
        except Exception as e:
            print(e)
            return Response({"Change unsuccessful":"this happened inside put method"})
    if request.method=="GET":
        try:
            answerKey=[]
            if True== user.married:
                answerKey.append(1)
            if True == user.gi_bill:
                answerKey.append(2)
            if True == user.va_homeloan:
                answerKey.append(3)
            if True== user.va_health_claims:
                answerKey.append(4)
            if True == user.skillsbridge:
                answerKey.append(6)
            if True == user.trs:
                answerKey.append(5)
            return Response({"answer": answerKey})
        except Exception as e:
            print(e)
            return Response({"failute":"this happened inside get method"})
    
    return Response({"Change successful":[to_change, value]})
    