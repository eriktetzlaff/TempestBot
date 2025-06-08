from django.db import models

class ChatMessage(models.Model):
    user_message = models.CharField()
    system_message = models.CharField()
    timestamp = models.DateTimeField()

