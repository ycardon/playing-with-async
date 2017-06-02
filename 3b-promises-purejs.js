function request(url) {
    return new Promise( (resolve, reject)=>{
        require('http').get(url, (response)=>{
            const body = []
            response.on('data', (chunk)=>body.push(chunk) )
            response.on('end', ()=>resolve(body.join('')) )
        }).on('error', (err)=>reject(err) )
    })
}

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

getPost(OK_URL).then(printPost).catch( err=>console.error(err) )
getPost(KO_URL).then(printPost).catch( err=>console.error(err) )