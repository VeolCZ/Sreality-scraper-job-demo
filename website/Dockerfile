# syntax=docker/dockerfile:1
FROM node:19-slim
WORKDIR /website
COPY . .
RUN npm install --production
RUN npm run build
CMD ["npm", "run", "start"]
EXPOSE 8080:8080