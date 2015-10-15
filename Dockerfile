FROM uchiwa/uchiwa

EXPOSE 80 3000

RUN curl --silent --location https://deb.nodesource.com/setup_0.12 | bash -
RUN apt-get install -y nodejs

RUN mkdir -p /opt/config-filler
ADD index.js /opt/config-filler/

ADD start.sh /usr/sbin/
ADD config.json /opt/

CMD /usr/sbin/start.sh
