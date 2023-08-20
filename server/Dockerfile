# ---- Build Stage ----
FROM node:18 AS build

# Set the working directory in Docker
WORKDIR /app

# Copy package.json and package-lock.json (if available) 
COPY package*.json ./

# Install all dependencies, including dev dependencies for building the TypeScript code
RUN npm install

# Copy local server code to the container
COPY . .

# Build the TypeScript code for production
RUN npm run build

# ---- Production Stage ----
FROM node:18-slim

WORKDIR /app

# Copy only the built code and package files from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Install only production server dependencies
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 4000

# Command to run the built application
CMD ["npm", "serve"]
