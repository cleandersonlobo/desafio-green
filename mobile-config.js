App.info({
  id: 'com.cleandersonlobo.appdesafiogreenmile',
  name: "Desafio Green",
  description: 'Dessafio Greenmile',
  author: 'Cleanderson Lobo',
  email: 'cleandersonlobo@gmail.com',
  website: 'http://cleandersonlobo.com',
  version: "1.0"
});

App.icons({
  'iphone_2x': 'resources/icons/iphone_2x.png',
  'iphone_3x': 'resources/icons/iphone_3x.png',
  'android_mdpi': 'resources/icons/android_mdpi.png',
  'android_hdpi': 'resources/icons/android_hdpi.png',
  'android_xhdpi': 'resources/icons/android_xhdpi.png',
  'android_xxhdpi': 'resources/icons/android_xxhdpi.png',
  'android_xxxhdpi': 'resources/icons/android_xxhdpi.png',
});
App.launchScreens({
  'iphone6': 'resources/splash/iphone6.png',
  'android_mdpi_portrait': 'resources/splash/android_mdpi_portrait.png',
  'android_hdpi_portrait': 'resources/splash/android_hdpi_portrait.png',
  'android_xhdpi_portrait': 'resources/splash/android_xhdpi_portrait.png',
  'android_xxhdpi_portrait': 'resources/splash/android_xxhdpi_portrait.png',
});

App.setPreference("LoadUrlTimeoutValue", 60000);
App.accessRule("*");
App.setPreference('KeyboardDisplayRequiresUserAction', false);
