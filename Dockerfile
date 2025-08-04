# Stage 1: Build the Angular application
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./

# Install Angular CLI globally  
RUN npm install -g @angular/cli

RUN npm install

# Copy all source files
COPY . .

# Build using default environment.ts
RUN npm run build --configuration=production

# Stage 2: Serve using Nginx
FROM nginx:alpine

# Clean default Nginx HTML content
RUN rm -rf /usr/share/nginx/html/*

# Replace 'notes-app' with your actual Angular app folder name inside dist/
COPY --from=build /app/dist/notes-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

