const apiAdapter = require('../../utils/apiAdapter');
var FormData = require('form-data');

const BASE_URL = process.env.FACE_SERVICE_URL;
const api = apiAdapter(BASE_URL);

module.exports = {

    add_face: function (req, res, next) {

        const file = req.files;

        let form = new FormData();
        file.forEach(element => {
            form.append('image', element.buffer, element.originalname);
        });

        api
            .post('api' + req.path, form, {'maxContentLength': Infinity, 'maxBodyLength': Infinity, headers: {'Content-Type': `multipart/form-data; boundary=${form._boundary}`}}).then(resp => {
            res.send(resp.data)
        })
            .catch(error => {
                res.status(400).send({'status': 'Bad Request', 'error': error.message})
            })
    },

    update_face: function (req, res, next) {

        const file = req.files;

        let form = new FormData();
        file.forEach(element => {
            form.append('image', element.buffer, element.originalname);
        });

        api
            .put('api' + req.path, form, {'maxContentLength': Infinity, 'maxBodyLength': Infinity, headers: {'Content-Type': `multipart/form-data; boundary=${form._boundary}`}}).then(resp => {
            res.send(resp.data)
        })
            .catch(error => {
                res.status(400).send({'status': 'Bad Request', 'error': error.message})
            })
    },

    append_face: function (req, res, next) {

        const file = req.files;

        let form = new FormData();
        file.forEach(element => {
            form.append('image', element.buffer, element.originalname);
        });

        api
            .put('api' + req.path, form, {'maxContentLength': Infinity, 'maxBodyLength': Infinity, headers: {'Content-Type': `multipart/form-data; boundary=${form._boundary}`}}).then(resp => {
            res.send(resp.data)
        })
            .catch(error => {
                console.log(error)
                res.status(400).send({'status': 'Bad Request', 'error': error.message})
            })
    },

    get_all_faces: function (req, res, next) {

        if (req.query.fingerprint){
            var path = 'api' + req.path+'?fingerprint=true';
        }else{
            var path = 'api' + req.path;
        }

        api
            .get(path).then(resp => {
            res.send(resp.data)
        })
            .catch(error => {
                console.log(error)
                res.status(400).send({'status': 'Bad Request', 'error': error.message})
            })
    },

    get_face_by_id: function (req, res, next) {

        api
            .get('api' + req.path).then(resp => {
            res.send(resp.data)
        })
            .catch(error => {
                res.status(400).send({'status': 'Bad Request', 'error': error.message})
            })
    },

    delete_all_faces: function (req, res, next) {

        api
            .delete('api' + req.path).then(resp => {
            res.send(resp.data)
        })
            .catch(error => {
                res.status(400).send({'status': 'Bad Request', 'error': error.message})
            })
    },

    delete_face: function (req, res, next) {

        api
            .delete('api' + req.path).then(resp => {
            res.send(resp.data)
        })
            .catch(error => {
                res.status(400).send({'status': 'Bad Request', 'error': error.message})
            })
    },

    label_face: function (req, res, next) {

        api
            .patch('api' + req.path, req.body).then(resp => {
            res.send(resp.data)
        })
            .catch(error => {
                res.status(400).send({'status': 'Bad Request', 'error': error.message})
            })
    },

    blacklist_face: function (req, res, next) {

        api
            .patch('api' + req.path).then(resp => {
            res.send(resp.data)
        })
            .catch(error => {
                res.status(400).send({'status': 'Bad Request', 'error': error.message})
            })
    },

    whitelist_face: function (req, res, next) {

        api
            .patch('api' + req.path).then(resp => {
            res.send(resp.data)
        })
            .catch(error => {
                res.status(400).send({'status': 'Bad Request', 'error': error.message})
            })
    },

    unknown_face: function (req, res, next) {

        api
            .post('api' + req.path, req.body).then(resp => {
            res.send(resp.data)
        })
            .catch(error => {
                res.status(400).send({'status': 'Bad Request', 'error': error.message})
            })
    }
}