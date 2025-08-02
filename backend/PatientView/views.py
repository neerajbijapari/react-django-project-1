from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Patient
from .serializers import PatientSerializer

@api_view(['GET'])
def PatientList(request):
    patients = Patient.objects.all()
    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def PatientCreate(request):
    serializer = PatientSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'status': 'success'})
    return Response(serializer.errors, status=400)  # return errors if invalid

@api_view(['DELETE'])
def PatientDelete(request, id):  # ✅ Fixed: changed from `i` to `id`
    try:
        patient = Patient.objects.get(id=id)
        patient.delete()
        return Response({'status': 'deleted successfully'})
    except Patient.DoesNotExist:
        return Response({'error': 'Patient not found'}, status=404)
