const { Router } = require('express');
const router = Router();
// const axios = require('axios');
// const { Country, Activity } = require('../db.js');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouter = require('./Country');
const activityRouter = require('./Activity');



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countryRouter);
router.use('/activity', activityRouter);


// async function getApiInfo() {
//     const apiUrl = await axios.get('https://restcountries.com/v3/all')
//     const apiInfo = await apiUrl.data.map((c) => {
//         return {
//             id: c.cca3,
//             name: c.name.common,
//             flag: c.flags[0],
//             continent: c.continents[0],
//             capital: c.capital,
//             subregion: c.subregion,
//             area: c.area,
//             population: c.population
//         }
//     })
//     const guardar = () => {
//         apiInfo.map(i => {
//             Country.findOrCreate({
//                 where: {
//                     name: i.name,
//                     id: i.id,
//                 },
//                 defaults: {
//                     continent: i.continent,
//                     flag: i.flag,
//                     capital: i.capital,
//                     subregion: i.subregion,
//                     area: i.area,
//                     population: i.population
//                 },
//             }).catch((err) => { console.log(err) });
//         })
//     }
//     guardar()
//     return apiInfo;
// };


// const getDbInfo = async () => {
//     await getApiInfo()
//     const aux = await Country.findAll({
//         include: {
//             model: Activity,
//             attributes: ['name', 'difficulty', 'duration', 'season'],
//             through: {
//                 attributes: [],
//             }
//         }
//     })
//     return aux
// }

// router.get('/countries', async (req, res) => {
//     const name = req.query.name
//     let countriesTotal = await getDbInfo();
//     if (name) {
//         let countryName = await countriesTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
//         countryName.length ?
//             res.status(200).send(countryName) :
//             res.status(404).send('No esta el Pais');
//     } else {
//         res.status(200).send(countriesTotal);
//     }
// })


// router.get('/countries/:id', async (req, res) => {
//     const { id } = req.params
//     let countriesTotal = await getDbInfo();
//     if (id) {
//         let countryId = await countriesTotal.filter(el => el.id == id)
//         countryId.length ?
//             res.status(200).send(countryId) :
//             res.status(404).send('No esta el Pais');
//     }
// })

// router.post('/activity', async (req, res) => {
//     const { name, difficulty, duration, season } = req.body
//     const createActivity = await Activity.create({
//         name,
//         difficulty,
//         duration,
//         season
//     })

//     res.status(200).send(createActivity)

// })


module.exports = router;
