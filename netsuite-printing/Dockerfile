# Step 1: Build the Next.js application
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js app
RUN npm run build

# Step 2: Create the production image
FROM node:18 AS production

WORKDIR /app

# Install only production dependencies
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm install --production

# Copy built files from builder
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public

# Expose the application port
EXPOSE 1000

# Start the Next.js app
CMD ["npm", "start"]
