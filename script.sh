#!/usr/bin/env bash

npm i &> /dev/null
npm install -g jasmine
rm -rf spec
mv ./__answerBranch/spec ./spec
npm test
