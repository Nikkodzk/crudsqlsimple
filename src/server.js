// declaraciones
const express = require('express');
const path = require('path');   // path es un modulo que incluye express
const app = express();
const morgan = require('morgan');
const customerRoutes = require('./routes/customer');

// SQL
const mysql = require('mysql'); 
const myConnection = require('express-myconnection');
const { urlencoded } = require('express');



// settings
app.set('port', process.env.PORT || 1313);
app.set('views', path.join(__dirname,'views'))     
app.set('view engine','ejs');


// middlewares  y rutas
app.use(morgan('dev')) 
app.use(myConnection(mysql,{    // ejecuto myConnection que recibe mysql y un objeto con las configuraciones
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crudsqlsimple'
}, 'single' ));
app.use(express.urlencoded({extended: false}));
app.use('/', customerRoutes);   // rutas
express.static(path.join(__dirname,'public'))  // static files


// iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
})