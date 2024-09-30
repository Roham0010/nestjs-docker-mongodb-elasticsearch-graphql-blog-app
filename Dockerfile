FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json tsconfig.json ./

RUN npm install
COPY . .
RUN npm run build


FROM node:18-alpine

WORKDIR /app
COPY package*.json tsconfig.json ./

ENV PORT=3000
ENV NODE_ENV=dev

RUN npm ci --only=dev
COPY --from=builder /app/dist ./dist

EXPOSE ${PORT}

CMD ["npm", "run", "start:dev"]
