FROM nginx:1.21.6-alpine

COPY dist/angular11 /usr/share/nginx/html
COPY cicd/docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
