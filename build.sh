#!/bin/bash

cd ./modules/cli
npm install
cd ../../

cd ./modules/cmpapi
npm install
cd ../../

cd ./modules/core
npm install
cd ../../

cd ./modules/stub
npm install
cd ../../

cd ./modules/testing
npm install
cd ../../

cd ./modules/util
npm install
cd ../../

npm run build
npm run bundle