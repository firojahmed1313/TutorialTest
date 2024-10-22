from django.db import models
from django.utils import timezone
# Create your models here.
class testUser(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    image = models.ImageField(upload_to='userImage')
    createTime = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name

# one to many relationship
class userTosocialNetwork(models.Model):
    user = models.ForeignKey(testUser, on_delete=models.CASCADE, related_name='client')
    facebook = models.TextField()
    twitter = models.TextField()
    linkedin = models.TextField()
    github = models.TextField()
    create_time = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return f'{self.user.name} social account'

# many to many relationship
class usertocourses(models.Model):
    college = models.TextField()
    university = models.TextField()
    courses = models.ManyToManyField(testUser , related_name='course')
    create_time = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return f'{self.college} {self.university}'

#one to one relationship


class usertocertificate(models.Model):
    certificate = models.OneToOneField(testUser,on_delete=models.CASCADE,related_name='certificate')
    certificate_name = models.TextField()
    certificate_no= models.CharField(max_length=100)
    issue_date = models.DateTimeField(default=timezone.now)
    expire_date = models.DateTimeField()

    def __str__(self):
        return f'{self.certificate_name} certificate'