FROM ubuntu:latest

RUN apt-get update \
    && apt-get install -y mysql-server curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /opt

