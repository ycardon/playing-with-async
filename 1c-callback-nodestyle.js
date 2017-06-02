const request = require('request');

const OK_URL = 'http://jsonplaceholder.typicode.com/posts/1'
const KO_URL = 'http://localhost:9999'

function getPost(url, callback) {
    request(url, (err, resp, body)=>{
        if (!err) callback(null, body); else callback(err)
    })
}

function printPost(post) {
    console.log('--- before ---')
    console.log(post)
    console.log('--- after ---')
}

getPost(OK_URL, (error, body)=>{
    if (!error) printPost(body); else console.error(error)
})

getPost(KO_URL, (error, body)=>{
    if (!error) printPost(body); else console.error(error)
})
