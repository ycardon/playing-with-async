function request(url) {
    return new Promise( (resolve, reject)=>{
        require('http').get(url, (response)=>{
            const body = []
            response.on('data', (chunk)=>body.push(chunk) )
            response.on('end', ()=>resolve(body.join('')) )
        }).on('error', (err)=>reject(err) )
    })
}

function getPost() {
     return request('http://jsonplaceholder.typicode.com/posts/1')
}

function printPost(post) {
    console.log('--- before ---')
    console.log(post)
    console.log('--- after ---')
}

getPost().then(printPost).catch( err=>console.error(err) )