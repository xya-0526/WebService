FROM node:20-alpine

WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装所有依赖，保证 nest build 可用
RUN npm install

# 拷贝源代码
COPY . .

# 编译 Nest.js
RUN npm run build

# 删除 devDependencies 保持生产环境精简
RUN npm prune --production

EXPOSE 3000

CMD ["node", "dist/main.js"]