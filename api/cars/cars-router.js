// DO YOUR MAGIC
const Cars = require('./cars-model')
const router = require('express').Router();

router.get('/', (req, res) => {
    Cars.getAll()
    .then(cars => {
        res.json(cars)
    })
    .catch(err => {
        res.status(500).json({ 
            message: `Failed to retrieve cars: ${err.message}`});
    })
})

module.exports = router
