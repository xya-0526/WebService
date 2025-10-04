# 使用轻量 Node.js 镜像
FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 拷贝 package.json 和 package-lock.json
COPY package*.json ./

# 安装所有依赖，包括 devDependencies，保证 nest build 可执行
RUN npm install

# 拷贝项目源代码
COPY . .

# 编译 Nest.js，生成 dist/
RUN npm run build

# 删除 devDependencies，只保留生产依赖
RUN npm prune --production

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["node", "dist/main.js"]