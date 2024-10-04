from django.shortcuts import render
from django.utils.timezone import now

def index(request):
    context = {
        'timestamp': now().timestamp(),
    }
    return render(request, "core/html/index.html", context)