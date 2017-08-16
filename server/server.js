const http = require('http');   
  
const hostname = 'localhost';  
const port = 8080;  

http.createServer((req, res) => {  
    
    res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Headers":"X-Requested-With",
        "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS",
        "X-Powered-By":" 3.2.1",
        "Content-Type":"application/x-www-form-urlencoded;charset=utf-8"
    });  
    
    getPath(req,res);

}).listen(port, hostname, () => {  
  console.log(`Server running at http://${hostname}:${port}/getBooks`);  
});
    
function getPath(req,res){
    var end = req.url.toString().indexOf('?');
    var opt = req.url.slice(1,end);
     
    switch (opt) {
        case 'getBooks':
            getBooks(res);
            break;
        case 'getChapters':
            getChapters(res);
            break;
        default:
            break;
    }
}

function getBooks(res){
    var json = {
        'total':3,
        'rows':[
            {
                'bookNo':'201710283123',
                'bookName':'jjjjj',
                'bookChapter':20
            },
            {
                'bookNo':'201710283120',
                'bookName':'qqqqq',
                'bookChapter':22
            },
            {
                'bookNo':'201710283130',
                'bookName':'ddddd',
                'bookChapter':12
            }
        ]
    }
    json = JSON.stringify(json);  
    res.end(json);//一定要加配置的回调方法名  
}

function getChapters(res){
    var json = {
        'total':3,
        'rows':[
            {
                'chapterId':'22992392901',
                'chapterName':'章节一',
                'downloadUrl':'http://localhost:8080/download/232387283/chapter_1'
            },
            {
                'chapterId':'22992392902',
                'chapterName':'章节二',
                'downloadUrl':'http://localhost:8080/download/232387283/chapter_2'
            },
            {
                'chapterId':'22992392903',
                'chapterName':'章节三',
                'downloadUrl':'http://localhost:8080/download/232387283/chapter_3'
            }
        ]

    }
    json = JSON.stringify(json);  
    res.end(json);//一定要加配置的回调方法名  
}