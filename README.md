## Service workers in React application
### Run this project:
- Install packages: `npm install`.
- Build packages: `npm run build`.
- Install static server: `npm install -g serve`.
- Run application on static server: `serve -s build`.

### Implement service workers in react app by [SW-PRECACHE](https://github.com/GoogleChrome/sw-precache) library 
- Install sw-precache: `npm install --save-dev sw-precache`.
- Add **sw-preacache-config.js** file to root directory with specific configuration:
```
module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/manifest.json',
    'build/static/**/!(*map*)'
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
- Build packages: `npm run build`.
- File service-worker.js should be generated in build directory.




