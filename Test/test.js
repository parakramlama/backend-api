const registration=require('../models/user_model');
const mongoose=require('mongoose');
const Registration = require('../models/user_model');
const pro=require('../models/product_model');
const product=require('../models/product_model');
const sub=require('../models/contact_model');
const subscribe=require('../models/contact_model');

const url='mongodb://localhost"27017/userTest';


beforeAll(async()=>{
    await mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true 
    })
})

afterAll(async()=>{
    await mongoose.connection.close()
})



//insert user
describe('Testing for user insert',()=>{
    it('addUserTest',()=>{

    const register={

        "user_username":"hari",
        "user_email":"hari@gmail.com",
        "user_contactno":"9885465156",
        "user_password":"passw"
    
    }
    
    return registration.create(register)
     
    .then((usersData)=>{
        expect(usersData.user_username).toEqual('hari')
    })
    })
})
    