/* eslint-disable no-console */
require('dotenv').config();
const multer = require('multer');
const express = require('express');
const fs = require('fs');
const path = require('path');
const ip = require('ip');
const data = require('./database/data');

const app = express();

const upload = multer({ dest: 'uploads' });

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/upload', upload.single('file'), async (req, res) => {
    // eslint-disable-next-line no-shadow
    const { path, originalname } = req.file;
    const id = path.replace('uploads\\', '');
    const fileData = {
        path, originalname, id,
    };

    data.push(fileData);

    res.render('index', { fileLink: `${req.headers.origin}/file/${id}`, originalName: `${req.file.originalname}` });
});

function deleteUploads() {
    const directory = 'uploads';
    fs.readdir(directory, (err, files) => {
        if (err) throw err;

        // eslint-disable-next-line no-restricted-syntax
        for (const file of files) {
            // eslint-disable-next-line no-shadow
            fs.unlink(path.join(directory, file), (err) => {
                if (err) throw err;
            });
        }
    });
}

async function handleDownload(req, res) {
    try {
        const file = await data.find((x) => x.id === req.params.id);
        res.download(file.path, file.originalname);
    } catch {
        res.status(400).json({ error: 'File not found' });
    }
}

app.route('/file/:id').get(handleDownload).post(handleDownload);

app.listen(process.env.PORT, '0.0.0.0', () => {
    deleteUploads();
    console.log(`Express app available at http://${ip.address()}:${process.env.PORT}`);
});
