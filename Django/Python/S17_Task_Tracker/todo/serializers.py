from rest_framework import serializers
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    pass

    class Meta:
        model = Todo
        fields = (
            'id',
            'task',
            'description',
            'priority',
            'is_done',
            'created_date',
        )