FROM node:latest AS frontend-builder
WORKDIR /build-app
COPY . .
RUN npm config set registry https://registry.npmmirror.com
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

FROM nginx:latest
EXPOSE 80
WORKDIR /app

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html
RUN mkdir /usr/share/nginx/html
COPY --from=frontend-builder /build-app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]