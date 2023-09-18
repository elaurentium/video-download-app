const downloadRoute = require('../service/urlDoVideo.service');

const downloadRoute = async (req, res) => {
    try {
        const { url } = req.query;
        const video = await downloadRoute.downloadRoute();

        if (!url) {
            return res.status(400).send('URL is required');
        }

        return res.status(200).json(video);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error on download');
    }
};



module.exports = downloadRoute;