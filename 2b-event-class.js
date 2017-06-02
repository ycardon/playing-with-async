const EventEmitter = require('events')
const request = require('request');

const OK_URL = 'http://jsonplaceholder.typicode.com/posts/1'
const KO_URL = 'http://localhost:9999'

class Post extends EventEmitter {
    get(url) {
        request(url, (err, resp, body)=>{
            if (!err) this.emit('body', body); else this.emit('error', err)
        })
    }
}

function printPost(post) {
        console.log('--- before ---')
        console.log(post)
        console.log('--- after ---')
}

new Post()
    .on('body', post=>printPost(post) )
    .on('error', err=>console.error(err) )
    .get(OK_URL)

new Post()
    .on('body', post=>printPost(post) )
    .on('error', err=>console.error(err) )
    .get(KO_URL)
