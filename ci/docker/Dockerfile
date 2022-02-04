FROM nginx:1.21.6-alpine

COPY build/app /usr/share/nginx/html
COPY ci/docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
