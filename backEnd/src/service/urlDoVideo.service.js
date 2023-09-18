const axios = require('axios');
const fs = require('fs')

const downloadRoute = async () => {
    //get video url
    const response = await axios.get(url, { responseType: 'stream' });

    //decides file name based on response
    const contentDisposition = response.headers['content-disposition'];
    const fileNameMatch = /filename="(.*)"/.exec(contentDisposition);
    const fileName = fileNameMatch ? fileNameMatch[1] : 'video.mp4';

    //build a stream recording file
    const fileStream = fs.createWriteStream(fileName);

    //pipeline of stream recording to response file 
    response.data.pipe(fileStream);

    //event of conclusion and error
    fileStream.on('finish', () => {
        res.download(fileName, (err) => {
            if (err) {
                console.error(err);
            }
            //remove file after download
            fs.unlinkSync(fileName);
        })
    })

    fileStream.on('error', (err) => {
        console.error(err);
    })
}

module.exports = downloadRoute;