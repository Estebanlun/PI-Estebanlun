// const { Router } = require('express')
// const router = Router();
// const { Country, Activity } = require('../db.js');
// const {apiInfo} = require('../controller/getApi')
// apiInfo()


// router.get('/', async (req,res)=>{
//     const {name} = req.query;
//     if (name){
        
//     }else{
//         const countries = await Country.findAll();
//         res.send(countries.length > 0 ? countries : 'No se encontro')
//     }
// })



// router.get('/', async (req, res) => {
//     let allCountries = await Country.findAll({});
//     if (req.query.name) {
//         let { name } = req.query
//         Country.findAll({
//             where: { name: name.charAt(0).toUpperCase() + name.slice(1) },
//             include: Activity
//         })
//             .then(r => {
//                 r.length > 0 ? res.json(r) : res.send('El país indicado no se encontró')
//             })
//     } else {
//         res.send(allCountries);
//     }

// })

// router.get('/:id', (req, res) => {
//     Country.findAll({
//         where: {id: req.params.id.toUpperCase()},
//         include: Activity
//     })
//     .then(r=>res.json(r))
// })

// module.exports = router;

