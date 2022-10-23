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

const namesArray = ['name', 'surname', 'address', 'phone', 'products']
export const orderRouter = Router({})

orderRouter.post('/', (req, res) => {
    const objectCheck = (obj: orderType) => {
        namesArray.forEach(el => {
            if (!obj.hasOwnProperty(el)) {
                res.status(400).send({error: 'Some fields are invalid'})
                return
            }
        })
        if (obj['products'].length === 0) {
            res.status(400).send({error: 'You doesnt order any product'})
            return
        } else {
            res.send(200)
        }
    }
    objectCheck(req.body)
})