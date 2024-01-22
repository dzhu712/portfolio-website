FROM node:lts-iron AS development
ENV NODE_ENV development

WORKDIR /zhu_daniel_site

COPY package.json .
RUN npm install

COPY . .

EXPOSE 7775

CMD ["npm", "run", "dev"]
