const eventer = new (require('events').EventEmitter)
const request = require('request');

const OK_URL = 'http://jsonplaceholder.typicode.com/posts/1'
const KO_URL = 'http://localhost:9999'

function getPost(url) {
    request(url, (err, resp, body)=>{
        if (!err) eventer.emit('body', body); else eventer.emit('error', err)
    })
}

function printPost(post) {
        console.log('--- before ---')
        console.log(post)
        console.log('--- after ---')
}

eventer.on('body', post=>printPost(post) )
eventer.on('error', err=>console.error(err) )
getPost(OK_URL)
getPost(KO_URL)
