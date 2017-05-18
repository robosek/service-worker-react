//Simple background sync
self.addEventListener('sync', function (event) {
    console.log('firing: sync');
    if (event.tag === 'myFirstSync') {
        console.log('myFirstSync event fired');
        event.waitUntil(fetchRandomImage());
    }
});

function fetchRandomImage() {
    //https://unsplash.it/200/300/?random
    console.log('fetching random Image');
    fetch('https://unsplash.it/200/300/?random')
        .then((response) => {
            console.log(response);
            return response;
        })
        .then((text) => {
            console.log('Request successfull ' + text);
        })
        .catch((error) => {
            console.log('Request failed ' + error);
        });
}