const request = require('request-promise');

function getPost() {
     return request('http://jsonplaceholder.typicode.com/posts/1')
}

function printPost(post) {
    console.log('--- before ---')
    console.log(post)
    console.log('--- after ---')
}

getPost().then(printPost).catch( err=>console.error(err) )