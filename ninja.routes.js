const express = require('express')
const router = express.Router()
const NinjaModel = require('./ninja.model')


// GET: http://localhost:4000/api/ninjas
// to get all the ninjas from the db
router.get('/ninjas', (req, res, next) => {
    NinjaModel.find({})
        .then(data => res.send(data))
        .catch(next);
})


// GET: http://localhost:4000/api/ninjas?lng=13.7&lat=45.3
// to get the ninjas near the given lng and lat from the db
router.get('/ninjas', (req, res, next) => {
    NinjaModel.aggregate([{
        $geoNear: {
            near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
            distanceField: "dist.calculated",
            maxDistance: 100000,
            spherical: true                
        }
    }])
    .then(data => res.send(data))
    .catch(next);
})




// POST: http://localhost:4000/api/ninjas
// to get add new ninja from the db
router.post('/ninjas', (req, res, next) => {

    // USING NORMAL CODE
    // var ninja = new NinjaModel(req.body)
    // ninja.save()

    // USING MONGOOSE
    NinjaModel.create(req.body)
        .then(dbData => res.send(dbData))
        .catch(next);
})




// PUT: http://localhost:4000/api/ninjas/:id
// to update details of a ninja from the db
router.put('/ninjas/:id', (req, res, next) => {
    NinjaModel.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            NinjaModel.findOne({_id: req.params.id})
                .then(data => res.send(data))
                .catch(next);
        }).catch(next);
})




// DELETE: http://localhost:4000/api/ninjas/:id
// to delete a ninja from the db
router.delete('/ninjas/:id', (req, res, next) => {
    NinjaModel.findByIdAndRemove({_id: req.params.id})
        .then(data => res.send(data))
        .catch(next);
})

module.exports = router;