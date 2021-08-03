const mongoose=require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/API',{
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//     useUnifiedTopology : true

// })


mongoose.connect('mongodb://127.0.0.1:27017/API',
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });




