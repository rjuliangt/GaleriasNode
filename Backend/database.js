const mongoose = require('mongoose');

// console.log(process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true, //para que no lanse un error en cosola
    useNewUrlParser: true,
   useUnifiedTopology: true 
})
    .then(db => console.log('Db is connected...') ) //conexion suceful
    .catch(err => console.err(err)); //error in conexion
    