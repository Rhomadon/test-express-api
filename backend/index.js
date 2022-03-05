import express from "express"
import db from "./config/database.js"
import productRoutes from "./routes/index.js"

const app = express()
const port = 5000

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.use('/products', productRoutes)

app.listen(port, () => console.log('Server: http://localhost:'+port))