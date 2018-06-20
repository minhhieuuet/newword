var express=require('express');
var app=express();
var fs=require('fs');
const translate = require('google-translate-api');

app.use(express.static('public'));
app.set("view engine","ejs");
app.set("views","./view");
var server=require('http').Server(app);
var content;
fs.readFile('./story.txt',"utf-8",(err,data)=>{
	content=data;
	content=content.replace(/[^\w\s]/gi, ' ').split(" ");
	content.forEach((v,i)=>{content[i]="<a href='#' class='word' '>"+v+"</a>"});
	content=content.join(" ");
	});
	


server.listen(8080);

app.get("/",function(req,res){
	

	res.render('trangchu',{content:content});
	
	res.end();
});

app.get("/string",(req,res)=>{
	var res1=res;
	 let word=req.query.word;
	 var meanning;
	 (async()=>{
	 	word=await translate(req.query.word, {to: 'vi'}).then(res => {
    	
    	 res1.send(req.query.word+" : "+res.text.toLowerCase());
    
		}).catch(err => {
		    console.error(err);
		});
	 })();
	 
	
	
});