const request = require('request-promise');

const OK_URL = 'http://jsonplaceholder.typicode.com/posts/1'
const KO_URL = 'http://localhost:9999'

function getPost(url) {
     return request(url)
}

async function printPost(url) {
    try {
        console.log('--- before --- ' + url)
        console.log(await getPost(url))
        console.log('--- after --- ' + url)
    } catch (err) {
        console.error(err)
    }
}

printPost(OK_URL)
printPost(KO_URL)
