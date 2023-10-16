const { Router } = require('express');


const urlDoVideo = require('../controller/urlDoVideo.controller');

const router = Router();

router
    .get('/', urlDoVideo.downloadRoute);


module.exports = router;