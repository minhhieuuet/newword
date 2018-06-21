var express=require('express');
var app=express();
var fs=require('fs');
const translate = require('google-translate-api');

app.use(express.static('public'));
app.set("view engine","ejs");
app.set("views","./view");
var server=require('http').Server(app);
server.listen(8080);

app.get("/",function(req,res){
	

	res.render('trangchu');
	
	res.end();
});

app.get("/string",(req,res)=>{
	var res1=res;
	 let word=req.query.word;
	 var meanning;
	 (async()=>{
	 	word=await translate(req.query.word, {to: 'vi'}).then(res => {
    	
    	 res1.send("<div class='element'><b style='color:red'>"+req.query.word.toLowerCase()+"</b>"+" : "+res.text.toLowerCase()+"</div>");
    
		}).catch(err => {
		    console.error(err);
		});
	 })();
	 
	
	
});