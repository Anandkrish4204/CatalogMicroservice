FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV PORT 3001
ENV SQL_DB_HOST localhost

EXPOSE ${PORT}

CMD ["npm","start"]