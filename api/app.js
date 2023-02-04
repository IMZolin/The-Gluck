const express = require('express')
const cors = require("cors");
// const sequelize = require('./db')
const app = express()

app.use(cors());
app.use(express.json())
app.get("/", (req, res) => {
    res.json({ message: "Welcome to The Gluck application." });
});

const PORT = process.env.PORT|| 5000
async function start(){
    try{
        app.listen(PORT, () =>  console.log(`App has been started on port ${PORT} ...`))
    }catch(e){
        console.log('Server Error', e.message)
        process.exit(1)
    }
}
start()
