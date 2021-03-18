FROM node:12-alpine as build

WORKDIR /kanban_frontend

ENV PATH /kanban_frontend/node_modules/.bin:$PATH
COPY package.json /kanban_frontend/package.json
RUN npm install --only=prod
COPY . /kanban_frontend

RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=build /kanban_frontend/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]