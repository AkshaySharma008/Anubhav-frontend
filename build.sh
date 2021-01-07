#!/bin/sh
npm run build
rm -rf ../Anubhav-backend/public/build/
cp -r build/ ../Anubhav-backend/public/
cd ../Anubhav-backend/
git add .
git commit -m "build"
git push
cd ../
ssh -i anubhav-latest_key.pem anubhav-latest@40.117.215.85
