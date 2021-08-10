
@echo off 
npm run build
ionic cap add android
ionic cap copy android --prod
cordova-res android --skip-config --copy
ionic cap open android

