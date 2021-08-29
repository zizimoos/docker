FROM node:latest
WORKDIR /home
COPY package*.json /home
RUN npm install
COPY . /home
CMD ["npm","start"]

# # docker build -t hellojs:latest .
# docker run -p 4000:4000 hellojs