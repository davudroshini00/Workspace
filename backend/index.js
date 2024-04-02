const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: '*',
    Credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())

app.post('/add_basicinfo', (req, res)=>{
    const values = [
        req.body.name,
        req.body.email,
        req.body.contactno
    ]
    if (err) res.json({ message: "Something unexpected has occured" + err })
  return res.json({ success: "student added successfully" })
});
app.get('/additionalquestion', (req, res)=>{
    if (err) res.json({ message: "Server error" })
    return res.json(result);
});

const port = 4000
const server = app.listen(port, () => {
    console.log('Server is running on port ${port}')
    
})
