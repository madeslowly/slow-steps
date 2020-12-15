#!/bin/bash

if  [[ $TRAVIS_PULL_REQUEST = "false" ]]
then
    ncftp -u "$USERNAME" -p "$PASSWORD" "$HOST"<<EOF
    rm -rf /public_html/madeslowly.xyz/gaitq/test
    mkdir /public_html/madeslowly.xyz/gaitq/test
    quit
EOF

    cd _site || exit
    ncftpput -R -v -u "$USERNAME" -p "$PASSWORD" "$HOST" /public_html/madeslowly.xyz/gaitq/test/ .
fi
