#!/bin/bash

# Build jira-qa-chat-front-end Docker image
cd jira-qa-chat-front-end
docker build -t jira-qa-chat-front-end .
cd ..

# Build chat-rfi-service Docker image
cd jira-qa-chat-service
docker build -t jira-qa-chat-service .
cd ..