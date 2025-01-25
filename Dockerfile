# Use Node.js as a base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app


# Install the dependencies
RUN npm install -g pnpm

# Copy the package.json and package-lock.json to the working directory
COPY package.json pnpm-lock.yaml ./

RUN pnpm install

# Copy the remaining application files to the working directory
COPY . .

RUN pnpm run build

EXPOSE 1000

CMD ["pnpm", "start", "-p", "1000"]
