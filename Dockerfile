FROM node:18-alpine
WORKDIR /usr/app

COPY ./package.json ./
COPY ./ .
RUN npm install
# RUN npx prisma db push
# RUN node prisma/seed.js
RUN npm run build
ENV NODE_ENV=production
ENV PORT=9000
EXPOSE 9000
CMD ["npm", "run" ,"start"]