const request = require('request');

function getPost(next) {
    request('http://jsonplaceholder.typicode.com/posts/1', (err, resp, body)=>{
        if (!err) next(body); else console.error(err)
    })
}

function printPost(post) {
    console.log('--- before ---')
    console.log(post)
    console.log('--- after ---')
}

getPost(printPost)
