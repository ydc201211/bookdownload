const http = require('http');   
  
const hostname = 'localhost';  
const port = 8080;  

http.createServer((req, res) => {  
  res.writeHead(200, {"Content-Type": "application/json"});  
    
  var json = {
      'total':3,
      'rows':[
            {
                'bookNo':'201710283123',
                'bookName':'jjjjj',
                'bookChapter':'20'
            },
            {
                'bookNo':'201710283120',
                'bookName':'qqqqq',
                'bookChapter':'22'
            },
            {
                'bookNo':'201710283130',
                'bookName':'ddddd',
                'bookChapter':'12'
            }
        ]

    }
    json = JSON.stringify(json);  
   
    res.end(json);//一定要加配置的回调方法名  
    // res.writeHead(200, { 'Content-Type': 'text/plain' });  
    // res.end(addon.hello());  
}).listen(port, hostname, () => {  
  console.log(`Server running at http://${hostname}:${port}/getData`);  
});