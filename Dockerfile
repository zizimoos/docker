FROM debian
RUN apt-get update; apt-get install stress -y
CMD ["/bin/bash","-c","stress -c 2"]

