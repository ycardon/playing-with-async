const Rx = require('rxjs/Rx')
const request = require('request-promise');

function getPost() {
     return request('http://jsonplaceholder.typicode.com/posts/1')
}

function printPost(post) {
    console.log('--- before ---')
    console.log(post)
    console.log('--- after ---')
}

Rx.Observable.fromPromise(getPost())
    .subscribe(
        post=>printPost(post),
        err=>console.error(err)
    )
