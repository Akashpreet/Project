const mongoose = require('mongoose')
// mongoose.connect('mongoose://127.0.0.1:27017/Class Project')

const connectToMongo = () => {
    mongoose.connect('mongodb+srv://akash123:qd8JaAK1eIVSzT48@cluster0.4jh1kdn.mongodb.net/?retryWrites=true&w=majority').then(() => { console.log("Successfully Connected") }).catch(() => { console.log("Conection Failed") })
}
module.exports = { connectToMongo }
