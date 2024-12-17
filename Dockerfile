# Используем официальный образ Node.js
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код проекта
COPY package.json .
COPY src ./src
COPY public ./public

# Открываем порт для Vite
EXPOSE 5173

# Запускаем приложение через Vite с флагом --host
CMD ["npm", "run", "dev", "--", "--host"]
