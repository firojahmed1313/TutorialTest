from django.shortcuts import render
from .models import testUser,usertocertificate
from .forms import UserForm
from django.shortcuts import get_object_or_404
# Create your views here.
def test(request):
    user = testUser.objects.all()
    return render(request, 'appTest/user.html',{'user':user})


def user_detail(request, id):
    user = get_object_or_404(testUser, pk=id)
    #print(user)
    return render(request, 'appTest/user_detail.html', {'user': user})

def userFormview(request):
    data=None
    if request.method == 'POST':
        form= UserForm(request.POST)
        if form.is_valid():
            formData=form.cleaned_data['name']
            print(formData)
            data=usertocertificate.objects.filter(certificate=formData)
            #data=usertocertificate.objects.filter(certificate_name=formData)
            #print(data)
    else:
        form = UserForm()

            
    return render(request, 'appTest/userForm.html',{'data': data,'form': form})