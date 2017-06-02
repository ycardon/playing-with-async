const request = require('request');

const OK_URL = 'http://jsonplaceholder.typicode.com/posts/1'
// const KO_URL = 'http://localhost:9999' // cannot call printPost(KO_URL)

function getPost(url) {
    request(url, (err, resp, body)=>{
        it.next(body)
    })
}

function *printPost(url, me) {
    console.log('--- before ---')
    console.log(yield getPost(url))
    console.log('--- after ---')
}

let it = printPost(OK_URL)
it.next()
