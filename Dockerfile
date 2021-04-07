FROM arm64v8/nginx:1.19.9-alpine

COPY client/dist/* /usr/share/nginx/html
