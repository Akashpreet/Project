const mongoose = require('mongoose')
// mongoose.connect('mongoose://127.0.0.1:27017/Class Project')

const connectToMongo = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/ClassProject').then(() => { console.log("Successfully Connected") }).catch(() => { console.log("Conection Failed") })
}
module.exports = { connectToMongo }