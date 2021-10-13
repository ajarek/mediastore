const router = require('express').Router()
const myCart = require('../models/myCart')
const mysort = {
    createdAt: -1
}
let getName


//cart
router.post('/cart', async (req, res) => {
    try {

        const newCart = new myCart(req.body)

        const cart = await newCart.save()
        console.log('Cart ok' + cart)
        res.redirect('/cart')
    } catch (err) {
        res.status(500).send(err)
    }
})

router.get('/cart', async (req, res) => {
    try {

        let carts = await myCart.find({}).sort(mysort)
        totalValueProducts = carts.reduce((acc, item) => Number(acc) + Number(item.price), 0)
        let quantity = await myCart.find({}).count()

        res.render('cart', {
            mycart: carts,
            quan: quantity,
            myprice: totalValueProducts
        })

    } catch (err) {
        res.status(500).send(err)
    }
    router.get('/delete/:id', (req, res) => {
        const {
            id
        } = req.params
        myCart.deleteOne({
                _id: id
            })
            .then(() => {
                console.log('Deleted products successfully!')
                res.redirect("/cart")
            })
            .catch((err) => console.log(err))

    })

    router.get('/deleteAll/', (req, res) => {
        
        myCart.deleteMany({})
            .then(() => {
                console.log('Deleted all products successfully!')
                res.redirect("/")
            })
            .catch((err) => console.log(err))

    })
})

module.exports = router