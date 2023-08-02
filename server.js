const express = require("express")
require("./app/src/config/dbConfig").getDbConnection()

const categoryRoutes = require("./app/src/routes/category.routes")
const productRoutes = require("./app/src/routes/product.routes")
const publicRoutes = require("./app/src/routes/public.routes")

const sessionControllerDb = require("./app/src/controller/sessionControllerDb")

const authMiddlerware = require("./app/src/middleware/auth.middleware")
const cors= require("cors")
const app = express()



//middlerware 
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

//private ->authenticated 
app.use("/admin",authMiddlerware,categoryRoutes)
app.use("/admin",authMiddlerware,productRoutes)

//public 
app.use("/public",publicRoutes)
app.post("/signup",sessionControllerDb.signup)
app.post("/login",sessionControllerDb.login)
app.get("/getallusers",sessionControllerDb.getAllUsers)


app.listen(9099)
console.log("server started 9099");