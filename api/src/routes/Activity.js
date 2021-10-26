const { Router } = require('express')
const router = Router();
const { Activity } = require('../db.js');

router.post('/', async (req, res) => {
    const { name, difficulty, duration, season } = req.body
    const createActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season
    })

    res.status(200).send(createActivity)

})

module.exports = router;