const Promise = require('bluebird')
const request = require('request-promise');

function getPost() {
     return Promise.delay(3000, request('http://jsonplaceholder.typicode.com/posts/1'))
}

async function printPost() {
    try {
        console.log('--- before ---')
        console.log(await getPost())
        console.log('--- after ---')
    } catch (err) {
        console.error(err)
    }
}

printPost()
