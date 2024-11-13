const mongoose = require('mongoose');

async function connectToDB() {
    try{
        await mongoose.connect('mongodb://localhost/playground');
        console.log('Successflully connect to MongoDB'.green.bold);

    }catch(error){
        console.log('We could connect to MongoDB');


    }
    

    
}
module.exports = connectToDB;