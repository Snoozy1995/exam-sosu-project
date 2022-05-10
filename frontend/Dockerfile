# production stage
FROM nginx:stable-alpine as production-stage
COPY /dist /usr/share/nginx/html
COPY expose-env.sh /docker-entrypoint.d/40-expose-env.sh
RUN chmod 777 /docker-entrypoint.d/40-expose-env.sh
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]