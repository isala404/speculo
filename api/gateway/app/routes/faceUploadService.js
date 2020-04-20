var express = require('express');
var router = express.Router();
const apiAdapter = require('../utils/apiAdapter');
const multer = require('multer')();
var FormData = require('form-data');
const userController = require('../api/controllers/user');

const BASE_URL = 'http://localhost:8503';
const api = apiAdapter(BASE_URL);


router.post('/api/v1/faces', (userController.validateUser), multer.any(), (req, res) => {

    const file = req.files;
  
    let form = new FormData();
    file.forEach(element => {
      form.append('faces', element.buffer, element.originalname);
    });
  
  
    api
    .post(req.path, form, {headers:{'Content-Type': `multipart/form-data; boundary=${form._boundary}`}}).then(resp=>{
      res.send(resp.data)
    })
    .catch(error =>{
        res.status(400).send({'status':'Bad Request'})
    })
})


module.exports = router;