from django.contrib import admin
from .models import type_doc,reservation,p_reserve,v_reserve,licences

# Register your models here.
admin.site.register(type_doc)
admin.site.register(reservation)
admin.site.register(p_reserve)
admin.site.register(v_reserve)
admin.site.register(licences)