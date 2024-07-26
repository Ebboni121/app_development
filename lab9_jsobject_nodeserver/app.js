//import the http module
const http = require('http')
const fs = require ('fs')

//create seerver
const server = http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type':'text/html'})


//create routing using url
const url= request.url

if (url ==='/home' || url ==="/"){
    fs.createReadStream('index.html').pipe(response)
}
else if(url==='/about'){
    fs.createReadStream('index.html').pipe(response)
}
else {
    fs.createReadStream('404.html').pipe(response)
}
})

//server is listening to port 3000
server.listen(3000,function(){
    console.log('server is running')
})




/**server for index.html
//create seerver
const server = http.createServer( function(request, response){
    //send the response
    response.writeHead(200,{'Content-Type': 'text/html'})
    const ReadStream = fs.createReadStream(__dirname + './index.html')

    //pipe
    ReadStream.pipe(response)
   
})
 * 
 * 
 */