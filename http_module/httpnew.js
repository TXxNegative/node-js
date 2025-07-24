
const http=require('http')
const server=http.createServer((req,res)=>{
    res.end("<h3>nice to meet you friend</h3>");
});

server.listen(4500,()=>{
    console.log('server is running on 4500');
    
})