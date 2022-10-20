import {Router} from 'express';

export const addressesRouter = Router({})
const addresses = [{id: 1, value: 'Nezavisimosti 135'}, {id: 2, value: 'Borovaya 35'}]

addressesRouter.get('/addresses/:id', (req, res) => {
    const address = addresses.find(p => p.id === +req.params.id)
    if (address) {
        res.send(address);
    } else {
        res.send(404)
    }
})