import express from 'express'
import bodyParser from 'body-parser';
import {productsRouter} from './routes/products-router';
import {addressesRouter} from './routes/addresses-router';
import cors from 'cors';
import {orderRouter} from './routes/orderRouter';

const app = express()
const port = process.env.PORT || 3000
const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
}
app.use(cors(corsOptions))
app.use(bodyParser())
app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)
app.use('/order', orderRouter)

app.get('/', (req, res) => {
    res.send('Hello World!!!');
})

//start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

export default app