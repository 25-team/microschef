# Первый этап: сборка проекта
FROM node:18 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Собираем проект
RUN npm run build

# Второй этап: запуск Nginx
FROM nginx:stable-alpine

# Копируем собранный проект в Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Экспонируем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
