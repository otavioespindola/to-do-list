
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/todo-list', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=> {console.log('Conectado ao Mongo')})
        .catch((err)=> console.log(err));