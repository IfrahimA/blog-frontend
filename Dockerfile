FROM node:20 AS build
ARG VITE_BACKEND_URL=https://blog-backend-640153316383.us-central1.run.app
WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build
FROM nginx AS final
WORKDIR /usr/share/nginx/html
COPY --from=build /build/dist .
