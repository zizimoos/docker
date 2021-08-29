FROM ubuntu:16.04
LABEL maintainer="zizimoos <zizimoos@gmail.com>"
#install Apahce
RUN apt-get update && apt-get install -y apache2
RUN echo "TEST WEB" > /var/www/html/index.html
EXPOSE 80
CMD ["/usr/sbin/apache2ctl","-DFOREGROUND"]

# docker build -t apacheweb:v1 .
# docker run -d -p 80:80 apacheweb:v1