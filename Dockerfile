# build environment
FROM node:lts as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ARG REACT_APP_HOST=${REACT_APP_HOST}
ENV REACT_APP_HOST=${REACT_APP_HOST}
ARG REACT_APP_IMGUR_TOKEN=${REACT_APP_IMGUR_TOKEN}
ENV REACT_APP_IMGUR_TOKEN=${REACT_APP_IMGUR_TOKEN}
COPY . /usr/src/app
RUN npm install
RUN npm run build

# production environment
FROM nginx:1.13.9-alpine
RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./default.conf /etc/nginx/conf.d/
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
