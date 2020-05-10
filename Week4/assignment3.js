// First to do in terminal:
// npm init
// npm install -g nodemon    // to start nodemon: npx nodemon
// npm i jinja-js:  for jinja template
// npm install express --save
// npm install mysql
// npm install express-session
// npm install mysqldump

const express = require('express'); 
const mysql = require('mysql'); 
const app = express();
app.use(express.static('public'))


// ====== mysql dump===========  
const mysqldump = require('mysqldump')
mysqldump({
    connection: {
        host: 'localhost',
        user: 'root',
        password: '0410',
        database: 'assignment',
    },
    dumpToFile: './dump.sql',
});
//===========================

// ===== session =======
var session = require('express-session');
var bodyParser = require('body-parser');
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
//var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// =====================


// // ===== cookies (not used) ====
// var cookieParser = require('cookie-parser'); //npm install cookie-parser
// app.use(cookieParser())
// // ==================



// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '0410',
    database : 'assignment'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});



// Create DB
// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE assignment';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Database created...');
//     });
// });

// Create table
app.get('/createtable', (req, res) => {
    let sql = "CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255), password VARCHAR(255))";
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Table created...');
    });
});


app.get('/', (req, res)=> {
    res.render('index.html');
})

//=====  post ========
app.post('/signIn', (req, res)=> {
  
    var email = req.body.email;
    var password = req.body.password;
    console.log("in signin");
    console.log("signin: "+ email + "password" + password);
	if (email && password) {
		db.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
            if (error) throw error;
			if (results.length > 0) {
				//req.session.loggedin = true;
                //req.session.username = email;
                console.log("sign in yes");
				res.send('redirect');
			} else {
				res.send('Incorrect email and/or Password!');
			}			
			res.end();
		});
    } else {  // maybe useless if "input" add "require" in html
		res.send('Please enter Username and Password!');
		res.end();
	}
});

app.post('/signUp', (req, res)=> {
    var email = req.body.email;
    var password = req.body.password;
    let post = {'email': email,'password':password};
    
	if (email && password) {
        db.query('SELECT * FROM user WHERE email = ?', [email], function(error, results, fields) {
            if (error) throw error;
			if (results.length > 0) {
                res.send('Email exists, please use another email');
			} else {		
                console.log("in insert before");
                db.query("INSERT INTO user SET ?", post, function(error, results, fields) {
                    if (error) throw error;
                    console.log("insert in yes");
                    res.send('redirect');
                });			
            }
		});
	} else {  // maybe useless if "input form" add "require" element in index.html
		res.send('Please enter Username and Password!');
		res.end();
	}
});

// ==================================
// // Insert post 1
// app.get('/addpost1', (req, res) => {
//     let post = {title:'Post One', body:'This is post number one'};
//     let sql = 'INSERT INTO posts SET ?';
//     let query = db.query(sql, post, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Post 1 added...');
//     });
// });


// // Select posts
// app.get('/getposts', (req, res) => {
//     let sql = 'SELECT * FROM posts';
//     let query = db.query(sql, (err, results) => {
//         if(err) throw err;
//         console.log(results);
//         res.send('Posts fetched...');
//     });
// });

// // Select single post
// app.get('/getpost/:id', (req, res) => {
//     let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
//     let query = db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Post fetched...');
//     });
// });

// // Update post
// app.get('/updatepost/:id', (req, res) => {
//     let newTitle = 'Updated Title';
//     let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
//     let query = db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Post updated...');
//     });
// });

// // Delete post
// app.get('/deletepost/:id', (req, res) => {
//     let newTitle = 'Updated Title';
//     let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
//     let query = db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Post deleted...');
//     });
// });

app.listen('3000', () => {
    console.log('Server started on port 3000');
});