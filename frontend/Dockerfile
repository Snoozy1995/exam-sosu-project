FROM nginx
RUN mkdir /app
COPY /dist /app
COPY nginx.conf /etc/nginx/nginx.conf
COPY expose-env.sh /docker-entrypoint.d/40-expose-env.sh
RUN chmod 777 /docker-entrypoint.d/40-expose-env.sh
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
