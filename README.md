## Service workers in React application

https://robosek.github.io/ServiceWokerReact/

### Run this project:
- Install packages: `npm install`.
- Build packages: `npm run build`.
- Install static server: `npm install -g serve`.
- Run application on static server: `serve -s build`.

### Implement service workers in react app by [SW-PRECACHE](https://github.com/GoogleChrome/sw-precache) library 
- Install sw-precache: `npm install --save-dev sw-precache`.
- Add **sw-preacache-config.js** file to root directory with specific configuration (Configuration includes external .js file for background-sync):
```
module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/manifest.json',
    'build/static/**/!(*map*)'
  ],
  importScripts: [
      'background-sync.js'
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js'
};
```
- Edit build script in package.json. Add sw-precache command after build: `"build": "react-scripts build && sw-precache --config=sw-precache-config.js"`.
- Add script in **index.html** file to check if serviceWorker is available in navagator object. Simple example:
```
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
   navigator.serviceWorker.register('/service-worker.js');
 });
}
```
- Example with registration background-sync on click action in sample image button:
```
if ('serviceWorker' in navigator) {
       navigator.serviceWorker.register('/service-worker.js')
         .then((registration) => {
           console.log('Success. Registration scope: ' + registration.scope);

            document.getElementById('imageButton').addEventListener('click',
             () => {
             registration.sync.register('myFirstSync').then(() => {
                  console.log('Sync registration also successful');
             });

          });
       }).catch((error) => {
          console.log('Some error occurred: ' + error);
      });
}
```
- Add necessary code for background-sync in .js file (for example backround-sync.js) in public directory.
- Build packages: `npm run build`.
- File service-worker.js should be generated in build directory.



## IMPORTANT! 
### IF YOU WANT TO TEST BACKGROUND-SYNC, YOU SHOULD TURN OFF YOUR INTERENT CONNECTION. OFFLINE OPTION IN GOOGLE CHROME IS NOT ENOUGH!



