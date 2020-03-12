import multer, { diskStorage } from 'multer';
import { Request, Response } from 'express';

export class UploadFile {
  fildName: string;
  mimeType: string;
  destination: string;
  outputFileName: string;
  maxSize: number;
  diskStorageToUploads: any;


  constructor(fildname: string, mimetype: string, destination: string, outputfilename: string, maxsize: number) {
    this.fildName = fildname;
    this.mimeType = mimetype;
    this.destination = destination;
    this.outputFileName = outputfilename;
    this.maxSize = maxsize;

    this.initStorage();
  }

  initStorage() {
    this.diskStorageToUploads = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, this.destination)
      },
      filename: (req, file, cb) => {
        cb(null, this.outputFileName)
      }
    });
  }

  savefiles(req: Request, res: Response) {
    let saveToUploads = multer({ storage: this.diskStorageToUploads }).single(this.fildName);

    saveToUploads(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        res.json({ message: err });
      } else if (err) {
        res.json({ message: 'An unknown error occurred when uploading.' });
      }
      if (!req.file) {
        res.json({
          message: 'No file received'
        });
      } else {
        res.json({ message: 'Successfully upload photo !' });
      }

    })
  }

}
