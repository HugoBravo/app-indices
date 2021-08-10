# 📈 app-indices

An Hybrid App built under [Ionic](https://ionicframework.com/) / [CapacitorJS](https://capacitorjs.com/) / [Angular](https://angular.io/) that shows the main Chilean Economic Indices provided by the API [mindicador.cl](https://mindicador.cl/).
Application developed for educational purposes.


## Running the app

```
# install dependencies
npm install

# run in dev mode on port 8100
ionic serve -o

# generate production build
ionic build --prod
```

## Testing

### Karma

```
ng test
```

## Android

Tested in Android 7.0+

If you need to compile for Android, you can generate the assets with [cordova-res](https://github.com/ionic-team/cordova-res).
```
cordova-res android --skip-config --copy

```


## Licence
Licensed under GNU GPL v3.0.
