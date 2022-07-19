// DO YOUR MAGIC
const router = require('express').Router();
const Cars = require('./cars-model');

const { 
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
} = require('./cars-middleware')

// GET - returns array of all objects or empty array
router.get('/', (req, res) => {
    Cars.getAll()
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({message: "There was an error fetching the list from the database"})
        });
})

// GET specific ID or return error if ID does not exist
router.get('/:id', checkCarId, (req, res) => {
    const id = req.id;

    Cars.getById(id)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(err => {
            res.status(err.status || 500).json(err.message)
        })
})

// router.use('/', (err, req, res, next) => {
//     res.status(err.status || 500).json("The operation failed: ", err.message)
//     next()
// })

module.exports = router;