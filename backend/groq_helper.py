import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

def ask_ai(user_message):

    prompt = f"""
    You are a professional AI recipe assistant.

    User Request:
    {user_message}

    Generate:
    - Recipe title
    - Ingredients
    - Step-by-step instructions
    - Cooking tips
    - Cooking time

    Format response in markdown.
    """

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        model="llama-3.3-70b-versatile",
    )

    return chat_completion.choices[0].message.content