#!/bin/bash

if  [[ $TRAVIS_PULL_REQUEST = "false" ]]
then
    ncftp -u "$USERNAME" -p "$PASSWORD" "$HOST"<<EOF
    rm -rf /home4/ydnwpmmy/public_html/madeslowly.xyz/gaitq/test
    mkdir /home4/ydnwpmmy/public_html/madeslowly.xyz/gaitq/test
    quit
EOF

    cd _site || exit
    ncftpput -R -v -u "$USERNAME" -p "$PASSWORD" "$HOST" /home4/ydnwpmmy/public_html/madeslowly.xyz/gaitq/test/ .
fi
