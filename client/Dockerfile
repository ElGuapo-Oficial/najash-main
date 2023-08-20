# ---- Build Stage ----
FROM node:18 AS client-build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the client app files
COPY . .

# Build the production version of the app
RUN npm run build  # This produces a `build` directory

# ---- Release Stage ----
FROM nginx:alpine AS client-release

# Copy the built app to the nginx directory
COPY --from=client-build /app/build /usr/share/nginx/html

# Expose port 80 for nginx
EXPOSE 80
