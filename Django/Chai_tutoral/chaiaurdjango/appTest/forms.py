from django import forms

from .models import testUser

class UserForm(forms.Form):
    name = forms.CharField(label="Your name",max_length=100);
