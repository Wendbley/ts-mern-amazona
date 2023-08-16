import express, { Request, Response } from 'express'
import { sampleProducts } from './data'
const app = express()
const PORT = 5000

app.get('api/products', (req: Request, res: Response) => {
    res.json(sampleProducts)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})