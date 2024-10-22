from django.contrib import admin
# Register your models here.
from .models import testUser,userTosocialNetwork, usertocourses, usertocertificate
class socialNetworksAdmin(admin.TabularInline):
    model = userTosocialNetwork
    extra = 2

class userDetailsAdmin(admin.ModelAdmin):
    list_display=('name', 'email', 'createTime')
    inlines = [socialNetworksAdmin]

class CoursesAdmin(admin.ModelAdmin):
    list_display=('college', 'university', 'create_time')
    search_fields=('college', 'university')
    list_filter=('create_time','college', 'university')
    filter_horizontal=('courses',)

class certificatesAdmin(admin.ModelAdmin):
    list_display=('certificate_name', 'certificate_no', 'issue_date', 'expire_date')
    search_fields=('certificate_name', 'certificate_no')
    list_filter=('issue_date', 'expire_date')
    #date_hierarchy = 'issue_date'



admin.site.register(testUser,userDetailsAdmin)
admin.site.register(usertocourses,CoursesAdmin)
admin.site.register(usertocertificate,certificatesAdmin)
