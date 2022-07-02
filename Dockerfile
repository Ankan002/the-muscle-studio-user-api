FROM node:alpine

WORKDIR /usr/gym-management/backend/backend-user

COPY package*.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN ["yarn", "build"]

CMD ["yarn", "start"]