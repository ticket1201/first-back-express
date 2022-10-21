import {Router} from 'express';

type ProductType = {
    id: number
    description: string
    name: string
    photo: string
    price: number
}

export const productsRouter = Router({})
const products:ProductType[] = [
    {
        id: 1,
        description: 'Garlic sauce, pepperoni, ham, fresh mushrooms, chicken filet, mozzarella cheese, basil',
        name: 'Four Season Pizza',
        photo: 'https://firebasestorage.googleapis.com/v0/b/solar-curve-319815.appspot.com/o/4season.jpg?alt=media&token=3fe80174-915d-4a74-8fa7-74ffc9e86730',
        price: 16
    },
    {
        id: 2,
        description: 'Grilled sauce, brisket (pork), ground beef, fresh tomatoes, lettuce, fresh onions, mozzarella cheese, basil, sesame',
        name: 'Big Tasty Pizza',
        photo: 'https://firebasestorage.googleapis.com/v0/b/solar-curve-319815.appspot.com/o/biff.jpg?alt=media&token=3a2c93b2-8da7-4855-9ef0-048a22869fe9',
        price: 25
    },
    {
        id: 3,
        description: 'Cheese sauce, cream cheese, feta cheese, dorblu cheese (may differ from the image on the site), mozzarella cheese, basil',
        name: 'Cheese Pizza',
        photo: 'https://firebasestorage.googleapis.com/v0/b/solar-curve-319815.appspot.com/o/cheese.jpg?alt=media&token=10e20102-1118-417f-a6fe-861f468a6e53',
        price: 22
    },
    {
        id: 4,
        description: 'Garlic sauce, chicken filet, brisket (pork), fresh tomatoes, mozzarella cheese, basil',
        name: 'Chicken Pizza',
        photo: 'https://firebasestorage.googleapis.com/v0/b/solar-curve-319815.appspot.com/o/chicken.jpg?alt=media&token=fd69fd04-ae5b-4f2c-8961-efb85f099d38',
        price: 21
    },
    {
        id: 5,
        description: 'Mushroom sauce, chicken filet, fresh mushrooms, fresh onions, mozzarella cheese, basil',
        name: 'French Chicken Pizza',
        photo: 'https://firebasestorage.googleapis.com/v0/b/solar-curve-319815.appspot.com/o/French.jpg?alt=media&token=5fd3cbbe-3032-4d13-96b1-cbd6f5b49927',
        price: 23
    },
    {
        id: 6,
        description: 'Cheese sauce, ham, chicken filet, pineapple, mozzarella cheese, basil',
        name: 'Hawaii Pizza',
        photo: 'https://firebasestorage.googleapis.com/v0/b/solar-curve-319815.appspot.com/o/hawaii.jpg?alt=media&token=7789357f-0e72-48e1-a313-6aa18b9eec18',
        price: 22
    },
    {
        id: 7,
        description: 'Pizza sauce, pepperoni, fresh mushrooms, brisket (pork), black olives, mozzarella cheese, basil',
        name: 'Pizza Italiano',
        photo: 'https://firebasestorage.googleapis.com/v0/b/solar-curve-319815.appspot.com/o/italiano.jpg?alt=media&token=b82ed9a4-d397-4748-819d-4d84b61ae769',
        price: 22
    },
    {
        id: 8,
        description: 'Garlic sauce, ham, fresh mushrooms, mozzarella cheese, basil',
        name: 'Mushroom Pizza',
        photo: 'https://firebasestorage.googleapis.com/v0/b/solar-curve-319815.appspot.com/o/mushr.jpg?alt=media&token=02eb0bd8-413c-44f5-b8e0-1ab83fd9e540',
        price: 23
    }
]

productsRouter.get('/', (req, res) => {
    if (req.query.name) {
        let searchString = req.query.name.toString();
        res.send(products.filter(p => p.name.indexOf(searchString) > -1))
    } else {
        res.send(products)
    }
})
productsRouter.post('/', (req, res) => {
    if (req.body && req.body.name && req.body.description && req.body.price) {
        const newProduct:ProductType = {id: +(new Date()), name: req.body.name, description: req.body.description, photo: req.body.photo, price: req.body.price}
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
    let product = products.find(p => p.id === +req.params.id)
    if (product) {
        product = {...product, ...req.body}
        res.status(200).send(product);
    } else {
        res.send(404)
    }
})
productsRouter.delete('/:id', (req, res) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1)
            res.send(204)
            return
        }
    }
    res.send(404)
})