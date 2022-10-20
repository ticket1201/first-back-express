import {Router} from 'express';

export const productsRouter = Router({})
const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'potato'}]

productsRouter.get('/', (req, res) => {
    if (req.query.title) {
        let searchString = req.query.title.toString();
        res.send(products.filter(p => p.title.indexOf(searchString) > -1))
    } else {
        res.send(products)
    }
})
productsRouter.post('/', (req, res) => {
    if (req.body && req.body.title) {
        const newProduct = {id: +(new Date()), title: req.body.title}
        products.push(newProduct)
        res.status(201).send(newProduct)
    } else {
        res.status(411)
    }
})
productsRouter.get('/:id', (req, res) => {
    const product = products.find(p => p.id === +req.params.id)
    if (product) {
        res.send(product);
    } else {
        res.send(404)
    }
})
productsRouter.put('/:id', (req, res) => {
    const product = products.find(p => p.id === +req.params.id)
    if (product) {
        product.title = req.body.title
        res.status(200).send(product);
    } else {
        res.send(404)
    }
})
productsRouter.delete('/:id', (req, res) => {
    for(let i = 0; i < products.length; i++){
        if (products[i].id === +req.params.id){
            products.splice(i,1)
            res.send(204)
            return
        }
    }
    res.send(404)
})