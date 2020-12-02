#!/bin/bash

FOLDER_NAME=${GIT_BRANCH//[\/]/-}
OUTPUT_PATH=build

echo "Build for ${GIT_BRANCH} branch started with parameters ${1}"

yarn install
yarn build:storybook
mkdir -p build

echo "Verifying $1"

if [ -z $1 ]; then
    OUTPUT_PATH=build/${FOLDER_NAME}
    mkdir -p ${OUTPUT_PATH}
    echo "Created ${FOLDER_NAME} folder"
fi

cp -r packages/web/docs/dist/* ${OUTPUT_PATH}
