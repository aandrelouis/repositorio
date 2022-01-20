import formidable from "formidable";
import { google } from "googleapis";
import fs from "fs";

export const config = {
    api: {
      bodyParser: false
    }
};

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
});

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'POST': {
            return uploadFile(req, res);
        }

        case 'DELETE': {
            return deleteFile(req, res);
        }
    }
}

async function uploadFile(req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, async function (err, fields, files) {
        try {
            const response = await drive.files.create({
                requestBody: {
                    name: files.file.originalFilename, //Nome do arquivo da imagem
                    mimeType: files.file.mimetype, //Tipo do arquivo (jpg, png, etc)
                },
                media: {
                    mimeType: files.file.mimetype,
                    body: fs.createReadStream(files.file.filepath),
                },
            });
    
            // altera a permissao da foto para publica
            await drive.permissions.create({
                fileId: response.data.id,
                requestBody: {
                  role: 'reader',
                  type: 'anyone',
                },
            });
    
            const image_data = {
                id: response.data.id,
                image_url: `https://drive.google.com/uc?id=${response.data.id}`,
            }
    
            // console.log(image_data);
            return res.json({
                message: image_data,
                success: true,
            });
        } catch (error) {
            console.log(error.message);
            return res.json({
                message: new Error(error).message,
                success: false,
            });
        }
    });    
}

async function deleteFile(req, res) {
    // console.log(req.query.id);

    try {
      const response = await drive.files.delete({
        fileId: req.query.id,
      });
      console.log(response.data, response.status);
      return res.json({
        message: response.data,
        success: true,
    });
    } catch (error) {
      console.log(error.message);
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
  }