var express=require('express');
var cors=require('cors');
var fs=require('fs');

var app=express();

app.use(cors());

var router=express.Router();

router.get("/sayHello",function(req,resp){
   var msg=req.query+ college;
   resp.status(200).json({"greeting":msg});
});

router.get("/news",function(req,resp){
	console.log("Sending news...");
	// var obj = {
 //    "name":"John",
 //    "age":30,
 //    "newsData": [
 //        { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
 //        { "name":"BMW", "models":[ "320", "X3", "X5" ] },
 //        { "name":"Fiat", "models":[ "500", "Panda" ] }
 //    ]
 // };
//s	obj.newsData='[{"news_title":"Killed ho gaya"},{"news_title":"Killed ho gaya"},{"news_title":"Killed ho gaya"}]';
  var newsJsonArr=fs.readFileSync('news-data.json');
   //var jsonContent = JSON.parse(newsJsonArr);
   resp.status(200).json(newsJsonArr);
   console.log("newsData ready");
});

app.use('/',router);	
app.listen("8080",function(){
console.log("Listening at port 8080");
});