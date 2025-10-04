# 使用官方轻量 Node.js 镜像
FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖（生产环境）
RUN npm install --production

# 复制源代码
COPY . .

# 编译 Nest.js
RUN npm run build

# 暴露容器端口（与 main.ts PORT 一致）
EXPOSE 3000

# 启动命令
CMD ["node", "dist/main.js"]
