const request = require('request');

const OK_URL = 'http://jsonplaceholder.typicode.com/posts/1'
const KO_URL = 'http://localhost:9999'

function getPost(url, next, error) {
    request(url, (err, resp, body)=>{
        if (!err) next(body); else error(err)
    })
}

function printPost(post) {
    console.log('--- before ---')
    console.log(post)
    console.log('--- after ---')
}

getPost(OK_URL, printPost, err=>console.error(err) )
getPost(KO_URL, printPost, err=>console.error(err) )
