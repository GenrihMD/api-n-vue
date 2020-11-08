# этап сборки (build stage)
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY ./client/package*.json ./
RUN npm install
COPY ./client .
RUN npm run build

# этап production (production-stage)
FROM nginx as production-stage

RUN apt-get update \
  && apt-get install --assume-yes --no-install-recommends\
    apt-transport-https \
    bzip2 \
    curl \
    git \
    rlwrap \
    vim \
    nodejs \
    npm \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /app
COPY ./server .
RUN npm install

WORKDIR /
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf
COPY ./entrypoint.sh .

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["/entrypoint.sh"]