from django.urls import path

from . import views

urlpatterns = [
    path('list/',views.PatientList),
    path('create/',views.PatientCreate),
    path('delete/<int:id>/', views.PatientDelete),
]
