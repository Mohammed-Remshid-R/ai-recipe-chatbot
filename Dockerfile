FROM python:3.11

WORKDIR /app

COPY . .

RUN pip install -r backend/requirements.txt

RUN apt-get update && apt-get install -y nodejs npm

RUN cd frontend && npm install

RUN cd frontend && npm run build

EXPOSE 7860

CMD ["python", "backend/app.py"]
