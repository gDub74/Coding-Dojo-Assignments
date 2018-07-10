from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime, localtime
from datetime import datetime
from pytz import timezone

ptz = timezone('US/Pacific')
local_time = datetime.now(ptz)

def index(request):
  context = {
  # "time": strftime("%b %d, %Y %I:%M %p", localtime())
  "time": local_time
  }
  return render(request,'curr_time/index.html', context)