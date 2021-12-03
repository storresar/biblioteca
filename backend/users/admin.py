from django.contrib import admin
from .models import user,client,id_document,roles,author_request,author
# Register your models here.

admin.site.register(user)
admin.site.register(client)
admin.site.register(id_document)
admin.site.register(roles)
admin.site.register(author_request)
admin.site.register(author)
