const Rx = require('rxjs/Rx')
const request = require('request-promise');

const OK_URL = 'http://jsonplaceholder.typicode.com/posts/1'
const KO_URL = 'http://localhost:9999'

function getPost(url) {
     return request(url)
}

function printPost(post) {
    console.log('--- before ---')
    console.log(post)
    console.log('--- after ---')
}

Rx.Observable.fromPromise(getPost(OK_URL))
    .subscribe(
        post=>printPost(post),
        err=>console.error(err)
    )

Rx.Observable.fromPromise(getPost(KO_URL))
    .subscribe(
        post=>printPost(post),
        err=>console.error(err)
    )
