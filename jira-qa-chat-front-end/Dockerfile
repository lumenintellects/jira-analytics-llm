# Stage 1: Build the Angular app
FROM node:19.8.1 as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the Angular app
RUN npm run build

# Stage 2: Serve the built Angular app
FROM nginx:1.21.0

# Copy the built app from the previous stage
COPY --from=build /app/dist/ai-chat-front-end /usr/share/nginx/html

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]