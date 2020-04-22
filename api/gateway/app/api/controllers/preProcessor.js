const apiAdapter = require('../../utils/apiAdapter');
var FormData = require('form-data');

const BASE_URL = process.env.face_service;
const api = apiAdapter(BASE_URL);


module.exports = {

    upload_footage: function(req, res, next){

        const file = req.files;
  
        let form = new FormData();
        file.forEach(element => {
          form.append('video', element.buffer, element.originalname);
        });
      
      
        api
        .post('api'+req.path, form, {headers:{'Content-Type': `multipart/form-data; boundary=${form._boundary}`}}).then(resp=>{
          res.send(resp.data)
        })
        .catch(error =>{
            res.status(400).send({'status':'Bad Request'})
        })
    }
}