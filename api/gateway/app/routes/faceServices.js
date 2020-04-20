var express = require('express');
var router = express.Router();
const apiAdapter = require('../utils/apiAdapter');
const userController = require('../api/controllers/user');


const BASE_URL = process.env.face_service;
const api = apiAdapter(BASE_URL);


router.get('/api/v1/faces', (userController.validateUser), (req,res)=>{
console.log("Called this function")
    api
    .get(req.path).then(resp=>{
        res.send(resp.data)
    })
    .catch(error =>{
        res.status(400).send({'status':'Bad Request'})
    })
})


router.get('/api/v1/faces/:id', (userController.validateUser), (req,res)=>{

    api
    .get(req.path).then(resp=>{
        res.send(resp.data)
    })
    .catch(error =>{
        res.status(400).send({'status':'Bad Request'})
    })
})


router.delete('/api/v1/faces', (userController.validateUser), (req,res)=>{

    api
    .delete(req.path).then(resp=>{
        res.send(resp.data)
    })
    .catch(error =>{
        res.status(400).send({'status':'Bad Request'})
    })
})


router.delete('/api/v1/faces/:id', (userController.validateUser), (req,res)=>{

    api
    .delete(req.path).then(resp=>{
        res.send(resp.data)
    })
    .catch(error =>{
        res.status(400).send({'status':'Bad Request'})
    })
})


router.patch('/api/v1/faces/:id/label', (userController.validateUser), (req,res)=>{

    api
    .patch(req.path).then(resp=>{
        res.send(resp.data)
    })
    .catch(error =>{
        res.status(400).send({'status':'Bad Request'})
    })
})


router.patch('/api/v1/faces/:id/blacklist', (userController.validateUser), (req,res)=>{

    api
    .patch(req.path).then(resp=>{
        res.send(resp.data)
    })
    .catch(error =>{
        res.status(400).send({'status':'Bad Request'})
    })
})

router.patch('/api/v1/faces/:id/whitelist', (userController.validateUser), (req,res)=>{

    api
    .patch(req.path).then(resp=>{
        res.send(resp.data)
    })
    .catch(error =>{
        res.status(400).send({'status':'Bad Request'})
    })
})


module.exports = router;