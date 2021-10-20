import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import UsersDAO from "./dao/usersDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.NEFFLIX_DB_URI,{
        wtimeout: 2500,
        useNewUrlParser: true
    }
).catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await UsersDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
<<<<<<< HEAD
})
=======
})
>>>>>>> d28bc444c51a75e13db5ae061f34c1f322f17092
