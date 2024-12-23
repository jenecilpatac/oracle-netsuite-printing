# Use official Node.js image as base image
FROM node:18 AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or pnpm-lock.yaml) to install dependencies
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN pnpm run build


# Use Nginx to serve the app in production
FROM nginx:alpine

# Copy the build output from the builder stage to Nginx's static folder
COPY --from=builder /app/.next /usr/share/nginx/html
COPY --from=builder /app/public /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 1000

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
