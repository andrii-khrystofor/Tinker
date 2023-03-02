FROM node:12.7-alpine as build
WORKDIR C:\Dev\Starnavi\Starnavi_Test\Starnavi-test-app\src\app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/starnavi-test-app /usr/share/nginx/html