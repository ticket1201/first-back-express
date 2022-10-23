import {Router} from 'express';
import {ProductType} from './products-router';

type orderType = {
    [key: string]: any
    name: string,
    surname: string,
    address: string,
    phone: string,
    products: ProductType[]
}

export const orderRouter = Router({})

orderRouter.post('/', (req, res) => {
    const objectCheck = (obj:orderType) => {
        for (let key  in obj) {
            if(!obj[key] || obj['products'].length === 0){
                res.status(400).send({error: 'Some fields are invalid'})
            }
            else {
                res.status(200)
            }
        }
    }
    objectCheck(req.body)
})