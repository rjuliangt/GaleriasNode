if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

console.log(process.env.NODE_ENV)
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');   
const path = require('path');
const cors = require('cors');

//initializacion
const app =  express();
require('./database')

//settings
app.set('port',process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req,file,cb){
        cb(null,new Date().getTime()+ path.extname(file.originalname));
    }
});

app.use(multer({ storage }).single('image'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //envio de json
app.use(cors());
//Router
app.use('/api/paseos',require('./routes/paseos'));

//Static file
app.use(express.static(path.join(__dirname, 'public')))

//star the server
app.listen(app.get('port'), () => {
    console.log('Server on puert: ', app.get('port'));
})