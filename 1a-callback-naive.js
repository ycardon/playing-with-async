const request = require('request');

const OK_URL = 'http://jsonplaceholder.typicode.com/posts/1'
const KO_URL = 'http://localhost:9999'

function getPost(url) {
    request(url, (err, resp, body)=>{
        if (!err) printPost(body); else console.error(err)
    })
}

function printPost(post) {
    console.log('--- before ---')
    console.log(post)
    console.log('--- after ---')
}

getPost(OK_URL)
getPost(KO_URL)
