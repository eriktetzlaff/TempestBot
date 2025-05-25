from ollama import chat
from ollama import ChatResponse
import ollama

#print(ollama.list())

def processMessage(question):
    response: ChatResponse = chat(model='llama3.2', messages=[
        {
            'role': 'user',
            'content': question,
        },
    ])
    print(response.message.content)
    return response.message.content

