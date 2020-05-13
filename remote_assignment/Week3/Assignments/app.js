const express = require('express'); //npm install express --save
const app = express();
//app.engine('html', require('ejs').renderFile); // npm install ejs for render html
app.set('view engine', 'pug'); //npm install pug --save

var cookieParser = require('cookie-parser');
app.use(cookieParser())
const port = 3000;
app.use(express.static('public'))

app.listen(3000, () =>{
    "Hello, my server!"
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/', (req, res)=> {
    let str = "Hello!"
    res.send( str);
})

app.get('/getData', (req, res)=> {
    let number = req.query.number;
    let str;
    let sum = 0;
    if (typeof number === 'undefined'){
        str = "Lack of Parameter";
    }   else if (isNaN(parseInt(number))){
        str = "Wrong Parameter";
    }   else if (number <= 0 || number % 1 != 0){
        str = "please enter positive integer"
    }
    
        else{
            for (let i = 1; i <= number; i++)
            {
                sum += i;
            }
        str = sum;
    }
    res.send(`<p>${str}</p>`);
})  

app.get('/myName', (req, res)=> {
    res.render('myName', {name : req.cookies.name});
})


// http://localhost:3000/trackName?name=
app.get('/trackName', (req, res)=> {
    let user = req.query.name;
    res.cookie('name', user, { path: '/myName', maxAge:600000});  //set cookie
    res.send(`username registered: ${user}`);
})  

function twoSum(nums, target) {
    // your code here
    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            // console.log("i,j:",i,j);

            if (nums[i] + nums[j] === target)
                return [i, j];
        }
    }        
    }

console.log(twoSum([2, 7, 11, 15], 9));
