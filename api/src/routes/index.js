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
        // const copiDb = Country.findOrCreate(apiInfo)
        return {
            id: c.cca3,
            name: c.name.common,
            flag: c.flags[0],
            continent: c.continents[0],
            capital: c.capital,
            subregion: c.subregion,
            area: c.area,
            population: c.population
        }
    })
    // console.log(apiInfo[0].name)
    const guardar = () => {
        apiInfo.map(i => {
            Country.findOrCreate({
                where: {
                    name: i.name,
                    id: i.id,
                },
                defaults: {
                    continent: i.continent,
                    flag: i.flag,
                    capital: i.capital,
                    subregion: i.subregion,
                    area: i.area,
                    population: i.population
                },
                // include: {
                //     model: Activity,
                //     attributes: ['name', 'difficulty', 'duration', 'season'],
                //     through: {
                //         attributes: [],
                //     }
                // }
            }).catch((err) => { console.log(err) });
        })
    }

    guardar()
    return apiInfo;

};



const getDbInfo = async () => {
    await getApiInfo()
    const aux = await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: {
                attributes: [],
            }
        }
    })
    return aux
}

const getAllCountries = async () => {
    // const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    // const totalInfo = apiInfo.concat(dbInfo);
    return dbInfo;
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
