const apiAdapter = require('../../utils/apiAdapter');
var FormData = require('form-data');
var fs = require('fs');


const BASE_URL = process.env.IMAGE_PROCESSOR_URL;
const api = apiAdapter(BASE_URL);

const BASE_URL_PROCESSOR = process.env.IMAGE_PROCESSOR_URL;
const api_processor = apiAdapter(BASE_URL_PROCESSOR);

module.exports = {

    downscale: function(req, res, next){

        const file = req.files;
  
        let form = new FormData();
        file.forEach(element => {
          form.append('video', element.buffer, element.originalname);
        });
      
      
        api
        .post('api'+req.path, form, {'maxContentLength': Infinity, 'maxBodyLength': Infinity, responseType: "stream", headers:{'Content-Type': `multipart/form-data; boundary=${form._boundary}`}}).then(resp=>{

            resp.data.pipe(fs.createWriteStream("video/video.mp4"));

            const form_data = new FormData();
            form_data.append('video', fs.createReadStream("video/video.mp4"), 'video.mp4');

            var path = '';
            return api_processor.post('api/v1/preprocess', form_data, {'maxContentLength': Infinity, 'maxBodyLength': Infinity, headers:{'Content-Type': `multipart/form-data; boundary=${form_data._boundary}`}});
        })
        .then(resp=>{
            res.send(resp.data);
        })
        .catch(error =>{
            console.log(error)
            res.status(400).send({'status':'Bad Request', 'error' : error.meessage})
        })

    }
}