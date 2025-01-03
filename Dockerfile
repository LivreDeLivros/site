FROM node:20.15.0

WORKDIR /home

COPY ./ ./

RUN npm install
RUN npm run build
EXPOSE 4000

CMD ["npm", "run", "start"]