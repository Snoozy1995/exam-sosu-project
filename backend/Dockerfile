FROM node:16-alpine
COPY /dist ./dist
COPY ~/ormconfig.json .
COPY /node_modules ./node_modules
CMD ["node", "dist/main"]