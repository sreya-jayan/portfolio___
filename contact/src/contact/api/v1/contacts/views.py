from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

from web.models import Contact


@api_view(["POST"])
@permission_classes([AllowAny])
def contacts(request):

    name = request.data.get('name')       
    email = request.data.get('email')     
    message = request.data.get('message') 

    Contact.objects.create(name=name, email=email, message=message)
    response_data={
        'success': True,
        'message': 'Message received!',
        'data': {
            'name': name,
            'email': email,
            'message': message
    }    }
    return Response(response_data)
