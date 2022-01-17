# 拉去node镜像打包react项目
FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY tsconfig.json
COPY public public/
COPY src src/
RUN yarn build
# 创建运行ngnix服务，并且将打包好的文件复制粘贴到服务器文件夹中
FROM ngnix:alpine
COPY --from=build /app/build/ /usr/share/ngnix/html
EXPOSE 80
CMD ['ngnix', '-g', 'daemon off;']