const { Router } = require('express');
const axios = require('axios');
const { Country, Activity } = require('../db.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const countriesRouter = require('./Country');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.use('/countries', countriesRouter);


async function getApiInfo() {
    const apiUrl = await axios.get('https://restcountries.com/v3/all')
    const apiInfo = await apiUrl.data.map((c) => {
        return {
            id: c.ccn3,
            name: c.name.common,
            flag: c.flags,
            continent: c.region,
            capital: c.capital,
            subregion: c.subregion,
            area: c.area,
            population: c.population
        }
    })
    // console.log(apiInfo[0].name)

    const guardar = () => {
        for (let i = 0; i < apiInfo.length; i++) {
            Country.findOrCreate({
                where: {
                    name: apiInfo[i].name,
                    // id: apiInfo[i].id,
                    // flag: apiInfo[i].flags[i]
                    // continent: apiInfo[i].region,
                    // capital: apiInfo[i].capital,
                    // subregion: apiInfo[i].subregion,
                    // area: apiInfo[i].area,
                    // population: apiInfo[i].population
                }
            })
        }
    }

    guardar()

    // const guardarCero = () => {
    //     Country.findOrCreate({
    //         where: {name: apiInfo[0].name, id: apiInfo[0].id}

    //     })
    // }
    // guardarCero();

    return apiInfo;

};



const getDbInfo = async () => {
    return await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: {
                attributes: [],
            }
        }
    })
}

const getAllCountries = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const totalInfo = apiInfo.concat(dbInfo);
    return totalInfo;
}


router.get('/countries', async (req, res) => {
    const name = req.query.name
    let countriesTotal = await getAllCountries();
    if (name) {
        let countryName = await countriesTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        countryName.length ?
            res.status(200).send(countryName) :
            res.status(404).send('No esta el Pais');
    } else {
        res.status(200).send(countriesTotal);
    }
})


router.get('/countries/:id', async (req, res) => {
    const { id } = req.params
    let countriesTotal = await getAllCountries();
    if (id) {
        let countryId = await countriesTotal.filter(el => el.id == id)
        countryId.length ?
            res.status(200).send(countryId) :
            res.status(404).send('No esta el Pais');
    }
})

router.post('/activity', async (req, res) => {
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
