const eventer = new (require('events').EventEmitter)
const request = require('request');

function getPost() {
    request('http://jsonplaceholder.typicode.com/posts/1', (err, resp, body)=>{
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
getPost()
