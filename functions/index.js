import functions from 'firebase-functions'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/fruniture', (req, res) => res.send(' comming soon...'))

export const api = functions.https.onRequest(app)

