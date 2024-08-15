import express from 'express'
import Connection from './database/db.js'
import router from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const port = 4000

app.use(cors())
app.use(bodyParser.json({ extented: true }))
app.use(bodyParser.urlencoded({ extented: true }))

app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


Connection();