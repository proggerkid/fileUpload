let express = require('express');
let app = express();
let http = require('http');
let httpServer = http.createServer(app);
let router = require('./router');
let fileupload = require('express-fileupload');

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(fileupload());


app.use('/', router);


httpServer.listen('8000');
