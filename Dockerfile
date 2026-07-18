FROM node:18-alpine
WORKDIR /app
COPY . ./
RUN pnpm install
RUN pnpm build
RUN pnpm start