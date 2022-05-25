FROM nginx
RUN mkdir /app
COPY /dist /app
COPY nginx.conf /etc/nginx/conf.d/default.conf.template
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
