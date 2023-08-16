import express, { Request, Response } from 'express'
import cors from 'cors'
import { sampleProducts } from './data'
const app = express()
app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173']
}))
const PORT = 5000

app.get('api/products', (req: Request, res: Response) => {
    res.json(sampleProducts)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})