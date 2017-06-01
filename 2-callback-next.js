const request = require('request');

function getPost(next, error) {
    request('http://jsonplaceholder.typicode.com/posts/1', (err, resp, body)=>{
        if (!err) next(body); else error(err)
    })
}

function printPost(post) {
    console.log('--- before ---')
    console.log(post)
    console.log('--- after ---')
}

getPost(printPost, err=>console.error(err) )
