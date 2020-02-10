const express=require('express');
const app=express();
const cors=require('cors');

app.use(cors());

var port=5000;

app.use(express.json());

const mysql=require('mysql');
var connection=mysql.createPool({
	connectionLimit : 10,
	host     : 'db',
	user     : 'hello',
	port	 :'3306',
	password : 'hello1234',
	database : 'contacts'
  });

app.get('/contacts',function(req,res,next){
	var promise=new Promise((resolve,error)=>{
		connection.query('SELECT * FROM user',function(err,results,fields){
			if(err) throw err;

		  resolve(results);
		  });
	});
	promise.then((value)=>{
		res.json(value);
	});
});
app.get('/contacts/:id',function(req,res,next){
	let {id}=req.params;
	let sql    = 'SELECT * FROM user WHERE id = ' + connection.escape(id);
	var promise=new Promise((resolve,error)=>{
		connection.query(sql,function(err,results,fields){
			if(err) throw err;

		  resolve(results);
		  });
	});
	promise.then((value)=>{
		res.json(value[0]);
	});
});
app.put('/editContact/:id',function(req,res,next){
	let {id}=req.params;
	let sql    = `UPDATE user SET name='${req.body.name}', image='${req.body.image}',
									address='${req.body.address}',
									phone_number='${req.body.phone_number}' WHERE id = ` + connection.escape(id);
	var promise=new Promise((resolve,error)=>{
		connection.query(sql,function(err,results,fields){
			if(err) throw err;

		  resolve(results);
		  });
	});
	promise.then((value)=>{
		res.json(value[0]);
	});
});

app.post('/addContact',function(req,res,next){
	var promise=new Promise((resolve,error)=>{
		connection.query('Insert into user SET ?',req.body,function (error, results, fields) {
			if (error) throw error;
			
			resolve(results);
		  })
	})
	promise.then((value)=>{
		res.json(value);
	});
	console.log("Adding data",req.body);
})

app.use(function(req,res,next){
	res.status(404);
	res.json({status:404,msg:"not found"});
})

app.use(function(err,req,res,next){
	res.status(500);
	res.json({status:500,msg:err});
});

app.listen(port,function() {
	console.log(`My App listening at ${port}`);
});
