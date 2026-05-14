---
title: AI Recipe Chatbot
emoji: 🍳
colorFrom: yellow
colorTo: red
sdk: docker
pinned: false
---

# 🍳 AI Recipe Chatbot

AI Recipe Chatbot is a modern AI-powered cooking assistant built with React, Flask, and Groq API that generates personalized recipes through a chatbot interface. 🌙✨ It features dark mode, animated UI, markdown responses, category filters, and search history.

---

## 🚀 Features

- 🤖 AI recipe generation using Groq API
- 💬 Modern chatbot interface
- 🌙 Dark mode UI
- ⚡ Smooth animations
- 📜 Markdown formatted responses
- 🔍 Category filters
- 🕘 Search history
- ⏳ Loading spinner
- 📱 Responsive design
- 🎨 Food-themed minimal UI

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios
- Framer Motion
- React Markdown
- Lucide React

### Backend
- Flask
- Flask-CORS
- Groq API
- Python Dotenv

---

## 📂 Project Structure

```plaintext
ai-recipe-chatbot/
│
├── backend/
│   ├── app.py
│   ├── groq_helper.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── Dockerfile
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-recipe-chatbot.git
```

---

### 2️⃣ Backend Setup

```bash
cd backend

pip install -r requirements.txt
```

Create `.env`

```env
GROQ_API_KEY=your_groq_api_key
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend

npm install
```

---

### 4️⃣ Run Project

From backend folder:

```bash
npm run dev
```

---

## 🧠 AI Model

This project uses:
- Groq API
- Llama 3 Model

---

## 💡 Example Prompts

```plaintext
Give me a spicy chicken recipe without onion
```

```plaintext
Suggest a healthy breakfast recipe
```

```plaintext
Quick dinner recipes under 20 minutes
```

---

## 🌐 Deployment

### Frontend + Backend
- Hugging Face Spaces
- Docker Deployment

---

## 📄 License

This project is open-source and available under the MIT License.