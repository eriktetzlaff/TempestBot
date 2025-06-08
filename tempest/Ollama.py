from ollama import chat
from ollama import ChatResponse
from ollama import Client
import ollama

#print(ollama.list())

ollamaClient = Client()

"""def processMessage(question):
    response: ChatResponse = chat(model='llama3.2', messages=[
        {
            'role': 'user',
            'content': question,
        },
    ])
    print(response.message.content)
    return response.message.content"""

def processMessage(question):
    response = ollamaClient.generate(
        model='llama3.2',
        prompt=question
        )
    print(response['response'])
    return response['response']

