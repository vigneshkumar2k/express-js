const express = require('express');
const app = express();
const router = express.Router()
// const alert= require('alert');
router.use(function (req, res, next) {
    // alert('welcome');
    console.log('request method is', req.method, 'add', req.url, 'url address');
    next();
});
app.get('/', function (req, res, next) {
    console.log('main page');
    res.send('home page')
    next();
});
app.get('/home', function (req, res, next) {
    console.log('first page');
    res.send('welcome')
    next();
});
router.get('/contact', function (req, res, next) {
    console.log('second page');
    res.send('contact here')
    next();
});
router.get('/exit', function (req, res, next) {
    console.log('third page')
    res.send('hello')
    next();
    
})



app.get('*', function (req, res, next) {
    var err = new Error('page not found')
    next(err);
})


// app.use(function(req,res){
//     console.log('the end');
// })

app.use('/router', router)

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('page not found');
})

app.listen(8080);