FROM node:lts-iron AS development
ENV NODE_ENV development

WORKDIR /zhu_daniel_ui_garden

COPY package.json .
RUN npm install

COPY . .

EXPOSE 5173
EXPOSE 6006

CMD ["npm", "run", "dev"]
