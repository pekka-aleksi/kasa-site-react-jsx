FROM node:lts AS development

WORKDIR /setup

COPY package.json package.json
#COPY package-lock.json package-lock.json
COPY yarn.lock yarn.lock

COPY public public/
COPY src src/
COPY .nginx .nginx/
COPY .env .env

RUN yarn install
RUN yarn run build

######
FROM nginx:alpine

COPY --from=development /setup/build /setup/build
COPY --from=development /setup/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx
RUN rm -rf html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
