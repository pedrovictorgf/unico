from node:14.8.0-alpine3.10

WORKDIR /workspace

COPY package*.json /workspace/

RUN apk add --no-cache bash
RUN npm install

COPY . /workspace/

EXPOSE 3000

CMD ["npm", "start"]