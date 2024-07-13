const express = require('express')
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.get('/', (req, resp) => {
    resp.status(201).send("API running")
})
app.listen(8080,()=>{
    console.log("Server started at 8080")
})