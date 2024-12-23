# Use a stable Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and pnpm-lock.yaml to install dependencies
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the application
RUN pnpm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Run the application
CMD ["pnpm", "start"]
